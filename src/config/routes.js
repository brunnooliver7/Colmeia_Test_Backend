const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // Professor Routes
    const professorService = require('../api/professor/professorService')
    professorService.register(router, '/professores')
}