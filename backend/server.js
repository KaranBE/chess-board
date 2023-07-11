const express = require('express')
const cors = require('cors')

const app = express()
const corsConfig = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsConfig))
app.use(express.json());

app.use(express.urlencoded({ extended: true}))
const db = require("./app/models");
db.sequeslize.sync();
app.get('/', (req, res) => {
    res.json({message: 'Welcome to application.'})
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});