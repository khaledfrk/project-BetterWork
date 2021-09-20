const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

//mongodb+srv://ayyoub:Vystrel2006@cluster0.xk0ql.mongodb.net/test