const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')

const app = express()

app.use(cors())

routes(app)

app.listen(process.env.PORT || 8080, () => 
    console.log('Está dando TUDO CERTO, está TUDO BEM!')
)

module.exports = app