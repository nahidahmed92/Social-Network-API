const router = require('express').Router();
const {
  getAllThoughts,
  createThought,
  getOneThought,
  updateThought,
  deleteThought,
  reactionsUpdate,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);

router.route('/:id/reactions').post(reactionsUpdate).delete(reactionsUpdate);

module.exports = router;
