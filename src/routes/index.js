const bodyParser = require('body-parser')
const projects = require('./projectsRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(projects)
}

