const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

/* GET inexbot page. */
router.get('/:command', function(req, res, next) {
  console.log(req);
  res.status(200)
      .send('here is inexbot router');
});


module.exports = router;
