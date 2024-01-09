// const express = require('express');
// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(cookieParser());

// app.get('/', (req, res) => {
//     // send single cookie
//     // console.log('cookie :', req.cookies.name);
//     // res.cookie('name', 'Bikash Ghimire').send(`Cookie sent to ${req.cookies.name}`)

//     // to send the multiple cookies 
//     // res
//     //     .cookie('firstName', 'Bikash')
//     //     .cookie('lastName', 'Ghimire')
//     //     .cookie('midName', 'jr')
//     //     .send(`Send cookies to ${req.cookies.firstName} and ${req.cookies.lastName} and ${req.cookies.midName}`)

//     // setting time interval for cookies
//     res.cookie('name', "Code With Express", { maxAge: 10000 })
//     res.send('Cokies will be expired in 10 seconds from the current date')

//     // to clear the cookie
//     app.get('/clear', (req, res) => {
//         res.clearCookie('name')
//         res.send('Cookie cleared successfully')
//     })

// })

// app.listen(9999);

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    const nameCookie = req.cookies.name;

    if (nameCookie) {
        // Cookie is present, but we won't set it again
        res.clearCookie('name'); 
        res.send(`Cookie value: ${nameCookie}. Cookie cleared.`);
    } else {
        // Cookie is not present
        res.cookie('name', 'Code With Express', { maxAge: 10000 });
        res.send('Cookie not found. New cookie set.');
    }
});

app.listen(9999, () => {
    console.log('Server is running on port 9999');
});
