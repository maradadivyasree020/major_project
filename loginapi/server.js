const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",  
  credentials: true,  
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"], 
}));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


const connectDB = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/userDB', {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });
      console.log('MongoDB Connected');
  } catch (err) {
      console.error('MongoDB Connection Error:', err);
      process.exit(1);
  }
};
connectDB();

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
