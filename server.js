require('dotenv').config()
const express = require('express')

const mongoose = require('mongoose')

const errorMiddleware = require('./middleware/errormd');

const pageRoutes = require('./routes/pageRoutes');

const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

// Middleware
// This helps our application to understand json
app.use(express.json())

app.use(express.urlencoded({extended: true}))


app.use('/api', pageRoutes);

app.get('/', (req, res) => {
    res.send('Hello Node API');
})

app.use(errorMiddleware);

// Personal Mongo Compass
// mongodb+srv://admin:Sarthak4120@cluster1.oguoh5g.mongodb.net/

// Office Mongo Compass 
// mongodb://localhost:27017/
// mongodb://localhost:27017/aquapedia
mongoose.connect(MONGO_URL
    , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to the Database...");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((error) => {
    console.log(error);
});

