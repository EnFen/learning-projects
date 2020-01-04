const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mLab db
mongoose.connect('mongodb://admin:Test1234@ds125841.mlab.com:25841/gql-learning', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
	console.log('connected to database...')
});

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log('Now listening for requests on port 4000');
});