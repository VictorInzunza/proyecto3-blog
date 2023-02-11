const express = require('express')
const app = express()
const postRouter = require('./posts/posts.router')
const port = 9000
const db = require('./utils/database')

app.use(express.json())

db.authenticate() //? Mostrar en consola 
    .then(() => console.log('Las credenciales de la base de datos son correctos'))
    .catch(err => console.log(err)) //! Error de autenticacion ( contraseña, usuarios o hosts )

db.sync() //? Sincronizar nuesta DB con los modelos que tenemos definidos
    .then(() => console.log('La base de datos de virus ha sido actualizada'))
    .catch(err => console.log(err)) //! Error en las tablas, propiedades, etc.

app.get('/', (req, res) => {
    res.status(200).json({ message: 'ok!' })
})

//rutas de post
app.use('/api/v1', postRouter)

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})

module.exports = app
