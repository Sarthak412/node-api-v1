const express = require('express')

const mongoose = require('mongoose')

const app = express();

// Routes
app.get('/', (req, res) => {
    res.send("Hello Node API")
})

const PORT = process.env.PORT || 3000

mongoose.connect("mongodb+srv://admin:Sarthak4120@cluster1.oguoh5g.mongodb.net/", {
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

