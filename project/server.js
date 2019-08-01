const express = require('express');
const bodyParser = require('body-parser');
const db = require('../utils/db');
const catalog = require('../routes/catalog.route');
const product = require('../routes/product.route');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());




app.use('/api/catalog', catalog);
app.use('/api/product', product);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
app.get('/', (req, res) => {
    res.send(`Listening on ${ PORT }`);
})