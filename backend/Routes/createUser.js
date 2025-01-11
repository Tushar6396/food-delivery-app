const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;
router.post(
  '/createuser',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 8 or more characters'
    ).isLength({ min: 8 }),
    check('location', 'Location is required').not().isEmpty(),
  ],

  async (req, res) => {
    // validate user input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, location } = req.body;

    try {
      // verify for existing user
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      let existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ msg: 'User already exists', success: false });
      }

      // create new user
      let user = new User({
        name,
        email,
        password: hashedPassword,
        location,
      });
      await user.save();
      res
        .status(201)
        .json({ user, msg: 'User created successfully', success: true });
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .send('Server Error')
        .json({ msg: 'Server Error', success: false });
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 8 or more characters'
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    // validate user input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ msg: 'Invalid credentials', success: false });
      }

      const comparePassword = await bcrypt.compare(password, user.password);

      // match password
      if (!comparePassword) {
        return res
          .status(400)
          .json({ msg: 'Invalid credentials', success: false });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

      res
        .status(200)
        .json({ msg: 'User logged in', success: true, authToken: authToken }); // temporary
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
