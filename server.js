const express = require('express');
const mongoose = require('mongoose');
const Url = require('./models/url');
const app = express();
const port = process.env.PORT || 3000;
// const ip = "192.168.0.6";

mongoose.connect('mongodb://localhost/url', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('index', { url: new Url() });
});

app.get('/log', async(req, res) => {
    const urls = await Url.find().sort({ createdAt: 'desc' })
    res.render('log', { urls: urls });
});

app.post('/url', async(req, res) => {
    let url = new Url({
        link: req.body.link
    });
    try {
        url = await url.save();
        res.render('index', { url: url });
    } catch (e) {
        res.redirect('/');
    }
});

app.get('/:slug', async(req, res) => {
    try {
        const red = await Url.findOne({ slug: req.params.slug });
        res.redirect(red.link);
    } catch (e) {
        res.redirect('/');
    }
});

// app.listen(port, ip);
app.listen(port);