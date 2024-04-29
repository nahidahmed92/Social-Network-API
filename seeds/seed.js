const connection = require('../config/connection.js');
const { Thought, User } = require('../models');
const { userData, thoughtData } = require('./data.js');

connection.once('open', async () => {
  const userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  const users = await User.insertMany(userData);
  const thoughts = await Thought.insertMany(thoughtData);

  console.log('Database seeded');
  process.exit(0);
});
