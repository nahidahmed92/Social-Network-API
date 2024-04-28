const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
