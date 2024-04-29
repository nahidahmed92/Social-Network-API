const userData = [
  {
    username: 'hookah101',
    email: 'hookah101@gmail.com',
  },
  {
    username: 'brittanyt',
    email: 'brittanythomas@gmail.com',
  },
  {
    username: 'fullstackdev',
    email: 'fsd@gmail.com',
  },
];

const thoughtData = [
  {
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

// console.log('thoughtData:', thoughtData);

module.exports = { userData, thoughtData };
