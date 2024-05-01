const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
  findAllFriends,
  friendsUpdate,
} = require('../../controllers/userController.js');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:id/friends').get(findAllFriends).post(friendsUpdate).delete(friendsUpdate);

module.exports = router;
