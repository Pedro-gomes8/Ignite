const { response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const customers = [];

// Enables JSON
app.use(express.json());

// Middlewares
/**
 * @name getCustomerByHeader
 * @description verifies if customer exists and returns the customer from header parameters. 
 * @param {*} req 
 * @param {*} res 
 * @param {Function} next 
 */
function getCustomerByHeader(req, res, next) {
    const customer = customers.find(customer => customer.socialNumber == req.headers.socialnumber);
    if (!customer) return res.status(400).json({ 'error': 'Customer Not Found' });
    req.customer = customer;

    return next();
}

function getBalance(customer) {
    let balance = 0;
    customer.statement.forEach(operation => {
        if (operation.type == 'credit') {
            balance += operation.amount;
        } else {
            balance -= operation.amount;
        }
    })
    return balance;
}
/** 
 * Handle create account
 * body structure:
 * socialNumber: string;
 * name: string;
 * id: uuid;
 * statement: []
 */
app.post('/account', (req, res) => {
    const { socialNumber, name } = req.body;
    const id = uuidv4();
    const customerAlreadyExists = customers.some(customer => customer.socialNumber == socialNumber);
    if (customerAlreadyExists) return res.status(400).json({ "error": "Customer Already Exists" });
    customers.push({
        socialNumber,
        name,
        id,
        statement: []
    });
    return res.status(201).send(`Created ${socialNumber}`);
});


// Sends bank's extract

app.get('/statement', getCustomerByHeader, (req, res) => {
    const { customer } = req;
    return res.json({ "statement": customer.statement });
})

// Making deposits
app.post('/deposit', getCustomerByHeader, (req, res) => {
    const { customer } = req;
    const { description, amount } = req.body;

    const statementOperation = {
        description,
        amount,
        createdAt: new Date(),
        type: 'credit'
    }
    customer.statement.push(statementOperation);
    return res.status(201).send();
})

// Withdraw
app.post('/withdraw', getCustomerByHeader, (req, res) => {
    const { customer } = req;
    const { amount } = req.body;

    const balance = getBalance(customer);
    if (balance < amount) return res.status(400).json({ 'error': 'Insufficient funds' });

    customer.statement.push({ description: 'Withdrawal', amount, createdAt: new Date(), type: 'debit' })
    return res.status(201).send();
})

// get statement by date
app.get('/statement/date', getCustomerByHeader, (req, res) => {
    const { customer } = req;
    const { date } = req.query;
    const dateFormat = new Date(date + "00:00")
    const statement = customer.statement.filter(operation => operation.createdAt.toDateString() == dateFormat.toDateString())
    return res.json({ "statement": statement });
})

// Update name
app.put('/account', getCustomerByHeader, (req, res) => {
    const { customer } = req;
    const { name } = req.body;
    customer.name = name;
    return response.status(201).send();
})

// Get account info
app.get('/account', getCustomerByHeader, (req, res) => {
    const { customer } = req;
    return response.json(customer)
})

// Delete account
app.delete('/account', getCustomerByHeader, (req, res) => {
    const { customer } = req;
    const indexOfCustomer = customers.findIndex(cust => cust.id == customer.id);
    if (indexOfCustomer == -1) return res.status(400).json({ "error": "Could not find customer" });

    customers.splice(indexOfCustomer, 1);
    return res.send();
})

// Get balance
app.get('/balance', getCustomerByHeader, (req, res) => {
    const { customer } = req;
    const balance = getBalance(customer)
    return res.json(balance);
})
app.listen(3030);