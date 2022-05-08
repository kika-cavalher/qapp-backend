import projects from "../models/projects.js";

class ProjectsController {

  static listAllProjects = (req, res) => {
    projects.find((err, projects) => {
      res.status(200).json(projects)
  })
  }

  static listProjectById = (req, res) => {
    const id = req.params.id;

    projects.findById(id, (err, projects) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do Projeto não localizado.`})
      } else {
        res.status(200).send(projects);
      }
    })
  }

  static createdProject = (req, res) => {
    let project = new projects(req.body);

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

    projects.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Projeto atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteProject = (req, res) => {
    const id = req.params.id;

    projects.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Projeto removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
}

export default ProjectsController