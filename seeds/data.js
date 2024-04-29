const userData = [
  {
    _id: '6011h2s9d5g3h8f7g4h3j20',
    username: 'hookah101',
    email: 'hookah101@gmail.com',
    thoughts: [],
    friends: ['6011h2s9d5g3h8f7g4h3j21', '6011h2s9d5g3h8f7g4h3j22'],
  },
  {
    _id: '6011h2s9d5g3h8f7g4h3j21',
    username: 'brittanyt',
    email: 'brittanythomas@gmail.com',
    thoughts: [],
    friends: ['6011h2s9d5g3h8f7g4h3j20', '6011h2s9d5g3h8f7g4h3j22'],
  },
  {
    _id: '6011h2s9d5g3h8f7g4h3j22',
    username: 'fullstackdev',
    email: 'fsd@gmail.com',
    thoughts: [],
    friends: ['6011h2s9d5g3h8f7g4h3j20', '6011h2s9d5g3h8f7g4h3j21'],
  },
];

const thoughtData = [
  {
    _id: '6011h2s9d5g3h8f7g4h3j24',
    thoughtText: 'Coming up with a vide for a great way to pack a bowl.',
    username: 'hookah101',
    reactions: [
      {
        reactionBody: 'cannot wait to see, i always mess up when packing.',
        username: 'brittanyt',
      },
    ],
  },
  {
    _id: '6011h2s9d5g3h8f7g4h3j25',
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
