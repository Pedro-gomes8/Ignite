const express = require('express');
const app = express();

// Middleware for JSON

app.use(express.json());

app.get('/courses', (request, response) => {
    // return response.send('Hello EVERYBODYY');
    // query param (optional)
    const query = request.query;
    return response.json([{ name: 'hii', description: 'WOW' }, { name: 'Second namee', description: 'Just filling in' }, { name: 'lorem', description: 'ipsum' }]);
})
app.post('/courses', (req, res) => {
    // body param
    console.log(req.body);
    return res.json('Nice')
})
// route param
app.delete('/courses/:id', (request, response) => {
    const { id } = request.params;
    console.log(id);
    return response.json(['without the id'])
})
// localhost:3030
app.listen(3030);