const router = require('express').Router();
const {
  User
} = require('../../models');
//  GER /api/users
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users
router.get('/', (req, res) => {});

// POST /api/users
router.post('/', (req, res) => {});

//  PUT /api/users/1
router.put('/:id', (req, res) => {});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;

//  These endpoints for the server are going to be accessible at the /api/users URL