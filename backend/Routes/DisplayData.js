const express = require('express');
const router = express.Router();

router.get('/foodData', async (req, res) => {
  try {
    // console.log(global.food_categories, global.food_items);
    res.json([global.food_categories, global.food_items]);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
