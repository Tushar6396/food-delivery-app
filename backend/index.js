const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const cors = require('cors');

dotenv.config();
connectDB();
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.use(express.json());
app.use('/api', require('./Routes/createUser'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
