const userData = [
  {
    _id: '6631b6cefbd7ea0a740f8d8b',
    username: 'hookah101',
    email: 'hookah101@gmail.com',
    thoughts: ['6631b71c9e2da83f2938057a'],
    friends: ['6631b6cefbd7ea0a740f8d8c', '6631b6cefbd7ea0a740f8d8d'],
  },
  {
    _id: '6631b6cefbd7ea0a740f8d8c',
    username: 'brittanyt',
    email: 'brittanythomas@gmail.com',
    friends: ['6631b6cefbd7ea0a740f8d8b', '6631b6cefbd7ea0a740f8d8d'],
  },
  {
    _id: '6631b6cefbd7ea0a740f8d8d',
    username: 'fullstackdev',
    email: 'fsd@gmail.com',
    thoughts: ['6631b71c9e2da83f2938057e'],
    friends: ['6631b6cefbd7ea0a740f8d8b', '6631b6cefbd7ea0a740f8d8c'],
  },
];

const thoughtData = [
  {
    _id: '6631b71c9e2da83f2938057a',
    thoughtText: 'Coming up with a video for a great way to pack a bowl.',
    username: 'hookah101',
    reactions: [
      {
        reactionBody: 'cannot wait to see, i always mess up when packing.',
        username: 'brittanyt',
      },
    ],
  },
  {
    _id: '6631b71c9e2da83f2938057e',
    thoughtText: 'Here is an amazing course to sign up for by Columbia Engineering Boot Camp.',
    username: 'fullstackdev',
    reactions: [
      {
        reactionBody:
          'yes, i have been searching for something that is actually decent and can improve my coding skills.',
        username: 'hookah101',
      },
    ],
  },
];

module.exports = { userData, thoughtData };
