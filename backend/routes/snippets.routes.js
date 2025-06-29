const express = require('express');
const {
  getSnippets,
  getSnippet,
  createSnippet,
  updateSnippet,
  deleteSnippet,
} = require('../controllers/snippets.controller');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/').get(protect, getSnippets).post(protect, createSnippet);
router
  .route('/:id')
  .get(protect, getSnippet)
  .put(protect, updateSnippet)
  .delete(protect, deleteSnippet);

module.exports = router;
