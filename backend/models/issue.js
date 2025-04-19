const mongoose=require('mongoose')

const issueSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'open'
    },
    priority:{
        type:String,
        default:'low'
    },
    creationDate:{

        type:Date,
        default:Date.now 
    }

})

module.exports=mongoose.model("Issue",issueSchema)