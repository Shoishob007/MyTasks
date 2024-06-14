const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', dataRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}!`);
});