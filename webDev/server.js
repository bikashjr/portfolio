const express = require('express');
const cookieParser = require('cookie-parser');
const userRouter = require('../routesWebDev/users');

const app = express();

// Assuming 'app' is my Express application
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.send('Hello')
})
app.get('/setcookie', (req, res) => {
    res.cookie('user', 'John Doe', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set');
});

app.get('/getcookie', (req, res) => {
    const userCookie = req.cookies.user;
    res.send('User: ' + userCookie);
});

// using cookieParser
app.use(cookieParser());

// using router from routes/user
app.use(userRouter);


app.listen(8888)