const connection = require('../config/connection.js');
const { Thought, User } = require('../models');
const { userData, thoughtData } = require('./data.js');

connection.once('open', async () => {
  console.log('connection opened');
  const userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
    console.log('user database dropped');
  }

  const thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
    console.log('thought database dropped');
  }
  const users = await User.create(userData);
  const userId = JSON.stringify(...users.map(({ _id }) => _id)).replace(/^"|"$/g, '');

  for (const thought of thoughtData) {
    const thoughts = await Thought.create({
      thoughtText: thought.thoughtText,
      username: thought.username,
      reactions: [
        {
          reactionBody: thought.reactions[0].reactionBody,
          username: thought.reactions[0].username,
        },
      ],
    });
  }

  console.log('Database seeded');
  process.exit(0);
});
