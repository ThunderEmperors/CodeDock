const Snippet = require('../models/Snippet');

// @desc    Get all snippets for logged in user
// @route   GET /api/snippets
// @access  Private
exports.getSnippets = async (req, res, next) => {
  try {
    const snippets = await Snippet.find({ user: req.user.id });
    res.status(200).json({
      success: true,
      count: snippets.length,
      data: snippets,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// @desc    Get single snippet
// @route   GET /api/snippets/:id
// @access  Private
exports.getSnippet = async (req, res, next) => {
  try {
    const snippet = await Snippet.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!snippet) {
      return res.status(404).json({
        success: false,
        error: 'Snippet not found',
      });
    }

    res.status(200).json({
      success: true,
      data: snippet,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// @desc    Create new snippet
// @route   POST /api/snippets
// @access  Private
exports.createSnippet = async (req, res, next) => {
  try {
    req.body.user = req.user.id;
    const snippet = await Snippet.create(req.body);

    res.status(201).json({
      success: true,
      data: snippet,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// @desc    Update snippet
// @route   PUT /api/snippets/:id
// @access  Private
exports.updateSnippet = async (req, res, next) => {
  try {
    let snippet = await Snippet.findById(req.params.id);

    if (!snippet) {
      return res.status(404).json({
        success: false,
        error: 'Snippet not found',
      });
    }

    // Make sure user owns the snippet
    if (snippet.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to update this snippet',
      });
    }

    snippet = await Snippet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: snippet,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// @desc    Delete snippet
// @route   DELETE /api/snippets/:id
// @access  Private
exports.deleteSnippet = async (req, res, next) => {
  try {
    const snippet = await Snippet.findById(req.params.id);

    if (!snippet) {
      return res.status(404).json({
        success: false,
        error: 'Snippet not found',
      });
    }

    // Make sure user owns the snippet
    if (snippet.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to delete this snippet',
      });
    }

    await Snippet.deleteOne({ _id: snippet });

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
