import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {type: String, required: true},
    abbreviation: {type: String, required: true},
    describe: {type: String},
  },
  {
    versionKey: false
  }
)

const project = mongoose.model("project", projectSchema)

export default project;

//Adicionar datacriação e edição
//Adicionar FK com o user ?????
