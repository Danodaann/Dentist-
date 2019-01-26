const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/CleanTeth', {
   useCreateIndex: true,
   useNewUrlParser: true,
   useFindAndModify: false             
                 }).then(db => console.log('La base de datos se conecto'))
                    .catch(err =>console.error(err));