import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send({"Routes" : [
        "/pokemon"
    ]})
})

app.get("/pokemon", (req: express.Request<{ nome: string}>, res) => {
    const nome = req.query.nome
    res.send({ "nome" : nome })
})

app.listen(process.env.PORT, () => {
    console.log(`Listening in http://localhost:${process.env.PORT}`)
})