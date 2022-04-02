const database = require('../models')

class ProjectController {
    //trazer todos os registros -- READ
    static async handleAllProjects(req, res){
        try {
            const allProjects = await database.Projects.findAll()
            return res.status(200).json(allProjects)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //trazer resgitro p /id -- READ
    static async handleOneProject(req, res){
        const {id} = await req.params
        try {
            const OneProjects = await database.Projects.findOne({where: { id: Number(id) } })
            return res.status(200).json(OneProjects)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //Criar novo registro -- CREAT
    static async CreateProject(req, res){
        const newProject = req.body
        try {
            const CreateNewProjects = await database.Projects.create(newProject)
            return res.status(200).json(CreateNewProjects)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //editar registro p /id -- CREAT
    static async UpdateProject(req, res){
        const {id} = await req.params
        const editProject = req.body
        try {
            //update
            await database.Projects.update(editProject, {where: { id: Number(id) } })
            //return project
            const updatedProject = await database.Projects.findOne({where: { id: Number(id) } })
            return res.status(200).json(updatedProject)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //deletar registro p /id -- CREAT
    static async DeleteProject(req, res){
        const {id} = await req.params
        try {
            await database.Projects.destroy({where: { id: Number(id) } })
            return res.status(200).json({menssagem: `projeto ${req.body.title} foi excluido`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ProjectController