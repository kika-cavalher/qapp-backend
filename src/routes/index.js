import express from "express";
import projects from "./projectsRoutes.js"
import cors from 'cors'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send("Está funcionando essa car@lh@")
  })

  app.use(
    cors(),
    express.json(),
    projects
  )
}

export default routes