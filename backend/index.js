const express =require('express')
const cors=require('cors')
const mongoose =require('mongoose')
const bodyParser=require('body-parser')
require('dotenv').config();
const issueRoutes=require('./routes/issues')
const app=express()
app.use(cors())
app.use(express.json())
// app.use(bodyParser.json())

const Mongo="mongodb+srv://Ghost:nLFNcbbyRSVNmXnD@cluster0.drkdocr.mongodb.net/issueTracker?retryWrites=true&w=majority&appName=Cluster0"

var port=process.env.PORT||5000;
console.log("Mongo URI:", process.env.Mongo);
mongoose.connect(Mongo,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected to MongoDB')
}).catch(err=>{
    console.error(`Connection error ${err}`)
})

app.use('/api/issues',issueRoutes);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})



