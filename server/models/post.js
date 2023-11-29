const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})


const PostMessage = mongoose.model('PostMessage', postSchema)
module.exports = PostMessage