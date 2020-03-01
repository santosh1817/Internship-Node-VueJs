const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { User } = require('../models/User');
const { authenticateUser } = require('../middlewares/authentication');

//http://localhost:5000/users
router.get('/', authenticateUser, function(req, res) {
  User.find()
    .then(function(users) {
      res.send(users);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get('/:username', authenticateUser, function(req, res) {
  User.findOne({ username: req.params.username })
    .then(function(users) {
      res.send(users);
    })
    .catch(function(err) {
      res.send(err);
    });
});

//http://localhost:5000/users/register
router.post('/register', function(req, res) {
  const body = req.body;
  const user = new User(body);

  user
    .save()
    .then(function(user) {
      res.send(user);
    })
    .catch(function(err) {
      res.send(err);
    });
});
//http://localhost:5000/users/login
router.post('/login', function(req, res) {
  const body = req.body;

  User.findByCredentials(body.email, body.password)
    .then(function(user) {
      return user.generateToken();
    })
    .then(function(token) {
      //    res.send({ token })
      res.setHeader('x-auth', token).send({});
    })
    .catch(function(err) {
      res.send(err);
    });
});

//http://localhost:5000/users/logout
router.delete('/logout', authenticateUser, function(req, res) {
  const { user, token } = req;
  User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
    .then(function() {
      res.send({ notice: 'successfully logged out' });
    })
    .catch(function(err) {
      res.send(err);
    });
});

//http://localhost:5000/users/delete
router.delete('/delete', authenticateUser, function(req, res) {
  const email = req.body.email;

  User.deleteOne({ email: email })
    .then(function(user) {
      res.send({ user, notice: 'this user deleted' });
    })
    .catch(function() {
      res.send({ user, notice: 'this user deleted' });
    });
});
//http://localhost:5000/users/update:username
router.put('/update/:username', authenticateUser, function(req, res) {
  const body = _.pick(req.body, [
    'username',
    'email',
    'password',
    'roles',
    'allowAccess'
  ]);
  User.findOneAndUpdate({ username: req.params.username }, body, {
    new: true,
    runValidators: false
  })
    .then(function(users) {
      res.send({ users, notice: 'this user got updated successfully' });
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = {
  usersRouter: router
};
