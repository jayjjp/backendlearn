
import 'dotenv/config'
import express from 'express'
const app = express()


app.get('/', (req, res) => {
    res.send("Hello")
})
const port = process.env.PORT 
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
