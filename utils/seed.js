const connection = require('../config/connection');
const { User, Thought, Reaction} = require('../models');
const { getEmail, getUser, getThoughtText, getReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = [];
  const reactions = [];

  for (let i = 0; i < 2; i++) {
    users.push({
        username: getUser(i),
        email: getEmail(i),
    });
  }

  for (let i = 0; i < 2; i++) {
    thoughts.push({
        thoughtText: getThoughtText(i),
    });
  }

  for (let i = 0; i < 2; i++) {
    reactions.push({
        reactionBody: getReaction(i),
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.table(reactions);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});