require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.port || 5000

app.use(cors());
app.use(express.json());

app.get('/', (rq, rs) => {
    rs.status(200).json([{message:'success'}])
})


app.listen(port, () => console.log(`Server started: PORT: ${port}`))