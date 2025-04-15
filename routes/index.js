const { Router } = require('express');
const { getAllMessages, insertMessage } = require('../db/queries');

const indexRouter = Router();

indexRouter.get('/', async (req, res) => {
    const messages = await getAllMessages();
    res.render('index', { messages });
});

indexRouter.get('/new', (req, res) => {
    res.render('form');
});

indexRouter.post('/new', async (req, res) => {
    const { messageText, messageUser } = req.body;
    await insertMessage(messageText, messageUser);
    res.redirect('/');
});

module.exports = indexRouter;