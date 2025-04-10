const { Router } = require('express');

const indexRouter = Router();

const date = new Date();

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        }
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        }
    }
];

indexRouter.get('/', (req, res) => {
    res.render('index', { messages: messages });
});

indexRouter.get('/new', (req, res) => {
    res.render('form');
});

indexRouter.post('/new', (req, res) => {
    const { message, author } = req.body;

    messages.push({
        text: message,
        user: author,
        added: {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        }
    });

    res.redirect('/');
});

module.exports = indexRouter;