require('dotenv').config();
const express = require('express');
const cors = require('cors');

const properties = require('./data/outsite_properties.json')

const app = express();
const port = process.env.port || 5000


console.log(properties)

app.use(cors());
app.use(express.json());

app.get('/', (rq, rs) => {
    rs.status(200).json(properties)
})


app.listen(port, () => console.log(`Server started: PORT: ${port}`))