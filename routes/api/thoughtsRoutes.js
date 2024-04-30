const router = require('express').Router();
const {
  getAllThoughts,
  createThought,
  getOneThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);

module.exports = router;
