const { Thought, User } = require('../models');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().populate('thoughts').populate('friends');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getOneUser: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id })
        .populate('thoughts')
        .populate('friends');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);

      res.json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findOneAndDelete({ _id: req.params.id });

      if (!deletedUser) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      await Thought.deleteMany({ username: deletedUser.username });
      res.json({ message: 'Deleted User and their Thoughts, they are now mindless 🤯' });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findAllFriends: async (req, res) => {
    try {
      // select a user to find their friends
      const user = await User.findOne({ _id: req.params.id });
      // find all friends of the selected user
      const allFriends = await User.find({ _id: { $in: user.friends } });
      res.json(allFriends);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  friendsUpdate: async (req, res) => {
    try {
      const { username } = req.body;
      const friend = await User.findOne({ username });

      if (!friend) {
        return res.status(404).json({ message: 'Username not found' });
      }

      let updatedUser;
      if (req.method === 'POST') {
        // add friend
        updatedUser = await User.findOneAndUpdate(
          { _id: req.params.id },
          { $addToSet: { friends: friend._id } },
          { new: true }
        );
      } else if (req.method === 'DELETE') {
        // delete friend
        updatedUser = await User.findOneAndUpdate(
          { _id: req.params.id },
          { $pull: { friends: friend._id } },
          { new: true }
        );
      }

      if (!updatedUser) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
