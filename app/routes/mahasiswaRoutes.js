module.exports = app => {
    const mahasiswa = require('../controllers/mahasiswaController')
    const request = require('express').Router();

    request.get('/',mahasiswa.findAll)
    request.get('/:id',mahasiswa.show)
    request.post('/',mahasiswa.create)
    request.put('/:id',mahasiswa.update)
    request.delete('/:id',mahasiswa.delete)

    app.use('/mahasiswa', request)
}