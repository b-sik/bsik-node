const express = require('express');
const router = express.Router();
const visitorLog = require('../services/visitorLog');

/* GET programming languages. */
// router.get('/', async function (req, res, next) {
//   try {
//     res.json(await visitorLog.getMultiple(req.query.page));
//   } catch (err) {
//     console.error(`Error while getting programming languages `, err.message);
//     next(err);
//   }
// });

/* POST visitor log */
router.post('/', async function (req, res, next) {
  try {
    res.json(await visitorLog.create(req.body));
  } catch (err) {
    console.error(`Error while creating visitor log`, err.message);
    next(err);
  }
});

/* PUT programming language */
// router.put('/:id', async function (req, res, next) {
//   try {
//     res.json(await visitorLog.update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating programming language`, err.message);
//     next(err);
//   }
// });

/* DELETE programming language */
// router.delete('/:id', async function (req, res, next) {
//   try {
//     res.json(await visitorLog.remove(req.params.id));
//   } catch (err) {
//     console.error(`Error while deleting programming language`, err.message);
//     next(err);
//   }
// });

module.exports = router;
