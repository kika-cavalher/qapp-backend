import project from "../models/projects.js";

class ProjectsController {

  static listAllProjects = (req, res) => {
    project.find((err, project) => {
      res.status(200).json(project)
  })
  }

  static listProjectById = (req, res) => {
    const id = req.params.id;

    project.findById(id, (err, project) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do Projeto não localizado.`})
      } else {
        res.status(200).send(project);
      }
    })
  }

  static createdProject = (req, res) => {
    let project = new project(req.body);

    project.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Projeto.`})
      } else {
        res.status(201).send(project.toJSON())
      }
    })
  }

  static updateProject = (req, res) => {
    const id = req.params.id;

    project.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Projeto atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteProject = (req, res) => {
    const id = req.params.id;

    project.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Projeto removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default ProjectsController