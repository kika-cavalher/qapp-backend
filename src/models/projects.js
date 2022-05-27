import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema(
  {
    id: {type: String, index: true},
    name: {type: String, required: true},
    content: {type: String, required: true},
    describe: {type: String},
    updated: { type: Date, default: Date.now },
  },
  {
    versionKey: false
  }
)

const projects = mongoose.model("projects", projectsSchema)

export default projects;

//Adicionar FK com o user ?????
