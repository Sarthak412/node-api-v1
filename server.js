const express = require('express')

const app = express();

// Routes
app.get('/', (req, res) => {
    res.send("Hello Node API")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})