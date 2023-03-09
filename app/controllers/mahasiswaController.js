const db = require('../models');
const mahasiswa = db.mahasiswa;

exports.create = (request, response) => {

    request.body.tanggal_lahir = new Date(request.body.tanggal_lahir)

    mahasiswa.create(request.body)
        .then(() => response.send({
            message: 'data succes add to database'
        }))
        .catch(err => {
            response.status(500).send(
                {
                    message: err.message
                })
        })
}

exports.findAll = (request, response) => {

    mahasiswa.find()
        .then(data => { response.send(data) })
        .catch(err => {
            response.status(500).send({
                message: err.message
            });
        });
    // response.send({
    //     message: 'is working'
    // })
}

exports.show = (request, response) => {
    const id = request.params.id;

    mahasiswa.findById(id)
        .then((data) => { response.send(data) })
        .catch(err => { response.status(500).send({ message: err.message }) })
}

exports.update = (request, response) => {
    const id = request.params.id;

    mahasiswa.findByIdAndUpdate(id, request.body, { useFindAndmodify: false })
        .then((data) => {
            if (!data) {
                response.status(404).send({ message: "tidak dapat mengupdate data" })
            }
            response.send({ message: "data berhasil di update" })
        })
        .catch(err => {
            response.status(500).send({ message: "data gagal di update !!" })
        })
}

exports.delete = (request, response) => {
    const id = request.params.id;

    mahasiswa.findByIdAndRemove(id)
        .then((data) => {
            if (!data){
                response.status(404).send({message : "data not found"})
            }
            response.send('data berhasil didelete')
        })
        .catch(err => {
            response.status(500).send({message : "data gagal dihapus"})
        })
}