var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
});

router.post('/new', (req, res, next) => {
  const text = req.body.message;
  const user = req.body.name;
  const added = new Date();

  messages.unshift({ text, user, added });

  res.redirect('/');
});

module.exports = router;
