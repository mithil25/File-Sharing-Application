var express = require("express"),
    app = express()
app.get('/', (req, res) => {
    res.json({ 'res': 'Hello World!!' })
})
app.listen(8000, () => {
    console.log('Server Listening on Port 8000')
})