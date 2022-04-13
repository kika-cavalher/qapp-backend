import express from "express";
import ProjectsController from "../controllers/projectsController.js";

const router = express.Router();

router
  .get("/projects", ProjectsController.listAllProjects)
  .get("/projects/:id", ProjectsController.listProjectById)
  .post("/projects", ProjectsController.createdProject)
  .put("/projects/:id", ProjectsController.updateProject)
  .delete("/projects/:id", ProjectsController.deleteProject)

export default router;