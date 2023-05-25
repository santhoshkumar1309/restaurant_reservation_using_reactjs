const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Replace '<YOUR_MONGODB_URI>' with your actual MongoDB connection URI
const uri = '<YOUR_MONGODB_URI>';

// Connect to MongoDB
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

const formSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  numberOfPersons: Number,
  date: String,
  time: String,
  party: String,
  message: String,
});

const Form = mongoose.model('Form', formSchema);

app.post('/api/form', (req, res) => {
  const formData = req.body;

  const form = new Form(formData);

  form
    .save()
    .then(() => {
      console.log('Form data saved successfully');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error saving form data:', error);
      res.sendStatus(500);
    });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
