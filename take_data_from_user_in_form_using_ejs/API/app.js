const express = require('express');
const path = require('path');

const app = express();

app.use(express.json())

app.use(express.static(path.join(path.resolve(), 'public')))

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.post('/', (req,res) => {
    const { name, gmail } = req.body

    res.json({
        name: name,
        gmail: gmail
    })
})

app.listen(4000, () => { 
    console.log("Server is working ...");
});
