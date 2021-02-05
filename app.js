const express = require('express');
const path = require('path');

const app = express();

app.listen(process.env.PORT || 3000, ()=>{console.log(`-> SERVER FUNCIONANDO <-`)});

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