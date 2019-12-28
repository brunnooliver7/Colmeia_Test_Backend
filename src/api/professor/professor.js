const restful = require('node-restful')
const mongoose = restful.mongoose

const professorSchema = new mongoose.Schema({
    nome: { type: String },
    imagem : { type: String },
    curriculo : { type: String },
    materia : [{ type: String }],
    nota : { type: String },
    bairro : { type: String }
})

module.exports = restful.model('Professor', professorSchema)