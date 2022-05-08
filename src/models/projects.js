import mongoose from "mongoose";

const projectsSchema = new Schema(
  {
    id: {type: [String], index: true},
    title: {type: String, required: true},
    abbreviation: {type: String, required: true},
    describe: {type: String},
  },
  {
    versionKey: false
  }
)

const projects = mongoose.model("projects", projectsSchema)

export default projects;

//Adicionar datacriação e edição
//Adicionar FK com o user ?????
