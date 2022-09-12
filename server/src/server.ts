import Express from "express";

const app = Express()

// localhost:3333/ads

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: "Henrique" },
        { id: 2, name: "Jorge" },
        { id: 3, name: "Julin do pneu" },
        { id: 4, name: "Flavio da mecanica" },
    ])
})

app.listen(3333)