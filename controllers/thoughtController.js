const { Thought, User } = require('../models');

module.exports = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find().populate('reactions');
      res.json(thoughts);
    } catch (error) {
      res.json(error);
    }
  },
  getOneThought: async (req, res) => {
    try {
      const thought = await Thought.findOne({ _id: req.params.id });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (error) {
      res.json(error);
    }
  },
  createThought: async (req, res) => {
    try {
      const newThought = await Thought.create(req.body);

      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: newThought._id } },
        { new: true }
      );

      console.log('user thought: ', user);

      if (!user) {
        return res.status(404).json({ message: 'Username not found' });
      }

      res.json(newThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateThought: async (req, res) => {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(updatedThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteThought: async (req, res) => {
    try {
      const deletedThought = await Thought.findOneAndDelete({ _id: req.params.id });

      if (!deletedThought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(deletedThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  reactionsUpdate: async (req, res) => {
    try {
      let updatedReaction;
      if (req.method === 'POST') {
        updatedReaction = await Thought.findOneAndUpdate(
          { _id: req.params.id },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        );
      } else if (req.method === 'DELETE') {
        updatedReaction = await Thought.findOneAndUpdate(
          { _id: req.params.id },
          { $pull: { reactions: req.body } },
          { runValidators: true, new: true }
        );
      }

      if (!updatedReaction) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(updatedReaction);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
