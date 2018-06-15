/**
 * Search route 
 */
const express = require('express');
const router = express.Router({
  mergeParams: true
});


/**
 * GET Search route
 * @param {Object} req - The express request object
 * @param {Object} res - The express response object
 * @param {Object} next - The next middleware in the middleware chain
 */
router.get('/', function(req, res, next) {
  let query = req.params.query;
  console.log(query);
  res.render('search');
});

module.exports = router;
