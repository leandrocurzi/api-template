require('dotenv').load();
// const argv = require('yargs').argv;
// const useMocks = (argv.m == true) ? true: false;

const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const CustomerController = require('./controllers/CustomerController');

const customerController = new CustomerController();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// middleware to use for all requests
app.use((req, res, next) => {
    // do general logging
    next();
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome message to Demo Customers API' });
});

app.route('/customers')
    .post((req, res) => customerController.add(req, res))
    .get((req, res) => customerController.search(req, res));

app.route('/customers/:id')
    .get((req, res) => customerController.get(req, res))
    .put((req, res) => customerController.update(req, res))
    .delete((req, res) => customerController.delete(req, res));

// use environment variables
app.listen(port);
console.log(`Demo API is running on port: ${port} Environment: ${process.env.NODE_ENV}`);
