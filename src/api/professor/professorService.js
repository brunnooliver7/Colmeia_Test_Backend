const Professor = require('./professor')

Professor.methods(['get', 'post', 'put', 'delete'])
Professor.updateOptions({new: true, runValidator: true})

module.exports = Professor