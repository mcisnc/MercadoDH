const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.listen(port, ()=>{console.log(`-> http://localhost:${port} <-`)});

app.use('/static', express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});

app.get('/sign-in', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/signin.html'))
})

app.get('/sign-up', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/signup.html'))
})