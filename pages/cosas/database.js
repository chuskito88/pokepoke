const mongoose = require('mongoose');

const URI = 'mongodb+srv://popifresco12:<password>@cluster0.iducd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose;