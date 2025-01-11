const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connection SUCCESS');
    const fetchedData = await mongoose.connection.db.collection('items');
    // const data = await fetchedData.find({}).toArray((err, result) => {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     global.items = data;
    //     console.log(global.items);
    //   }
    // });
    // console.log(fetchedData.collectionName);
    const data = await fetchedData.find({}).toArray();
    global.food_items = data;
    // console.log(global.food_items);
    const categoryData = await mongoose.connection.db.collection('category');
    const categories = await categoryData.find({}).toArray();
    global.food_categories = categories;
    // console.log(global.food_categories);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
