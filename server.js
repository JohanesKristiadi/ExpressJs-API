const express = require('express')
const cors = require('cors')
const db = require('./app/models')

const app = express();

const corsOpstions = {
    origin: "*"
};

const mongooseConfig = {
    useUnifiedTopology: true,
}
// konek ke database
db.mongoose.connect(db.url, mongooseConfig)
    .then(() => { console.log('database has been connected') })
    .catch(err => {
        console.log(`fail to connect database ${err.message}`)
        process.exit();
    });

// register Cors middleware

app.use(cors(corsOpstions));
app.use(express.json());

// memanggil routes mahasiswa
require('./app/routes/mahasiswaRoutes')(app)


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`system running on port ${PORT}`)
})