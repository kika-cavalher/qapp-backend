const { Router } = require('express')
const ProjectController = require('../controllers/ProjectController')

const router = Router()
router.get('/projects', ProjectController.handleAllProjects)
router.get('/projects/:id', ProjectController.handleOneProject)
router.post('/projects', ProjectController.CreateProject)
router.put('/projects/:id', ProjectController.UpdateProject)
router.delete('/projects/:id', ProjectController.DeleteProject)

module.exports = router