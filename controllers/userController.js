const { User } = require('../models');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().populate('thoughts').populate('friends');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getSingleUser: async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
  },
};
