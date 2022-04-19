import express from "express";
import projects from "./projectsRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send("Está funcionando essa car@lh@")
  })

  app.use(
    express.json(),
    projects
  )
}

export default routes