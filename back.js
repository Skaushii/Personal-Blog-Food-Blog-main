const express=require("express")
const nodemailer=require('nodemailer')
const notifier = require('node-notifier');
const alert=require("alert")
const multer=require("multer")
const app=express()
const bodyparser=require("body-parser")
const mongoose=require('mongoose')
const path=require("path")
const { stringify } = require("querystring")
const { Int32 } = require("mongodb")
const internal = require("stream")
const port="80"
const url="mongodb+srv://rahuln577:mantralaya123@cluster0.esckorx.mongodb.net/?retryWrites=true&w=majority"
let user="Login/Register"
var transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'rahulrahuln2001@gmail.com',
        pass:'mantralaya'
    }
})
app.use(bodyparser.urlencoded({extended:true}))
mongoose.connect(url,{useNewUrlParser:true})
mongoose.connection.once('open',_=>{
    console.log("Connected at: ",url)
})
mongoose.connection.on('error',err=>{
    console.error("The error is : ",err)
})
app.use('/static',express.static('static'))
app.set("view engine","pug")
app.set("views",path.join(__dirname,"views"))
const Schema= mongoose.Schema
const users1= new Schema({
    uid:String,
    uname:String,
    uemail:String,
    upass:String,
    noofa:Number
})
var upload=new multer({
    storage : multer.diskStorage({
        destination:(req,file,cb)=>
        {
            cb(null,'static')
        },
        filename:(req,file,cb)=>{
            cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
        }

    })
})

const A=new Schema({
    uid:String,
    adate:{
        type:Date,
        default:new Date()
    },
    atitle:String,
    atpara:String,
    aambience:String,
    aquality:String,
    aprice:String,
    arating:Number,
    alikes:Number,
    aimage:String,
    aaddress:String
})
A.index({'atitle': 'text','aaddress': 'text'})
const articles=mongoose.model("articles",A)
const users=mongoose.model("users",users1)
const likeschema= new Schema({
    name:String,
    likes:Number
})
const likedbs=mongoose.model("likedbs",likeschema)
const schema=new Schema({
    name:String,
    con:String,
    date:String
})
const Po= new Schema({
    atitle1:String,
    name:String,
    com:String
})
const post=mongoose.model("Postos",Po)
const l1=[1,2,3,4,5]
const Posts9= mongoose.model('Posts9',schema)
const Posts1= mongoose.model('Posts1',schema)
const Posts2= mongoose.model('Posts2',schema)
const Posts3= mongoose.model('Posts3',schema)
const Posts4= mongoose.model('Posts4',schema)
const Posts5= mongoose.model('Posts5',schema)
const Posts6= mongoose.model('Posts6',schema)
const Posts7= mongoose.model('Posts7',schema)
const Posts8= mongoose.model('Posts8',schema)
const em=new Schema({email:String})
const email=mongoose.model("email",em)
const inf=new Schema({name:String,email:String,phone:String,message:String})
const cinfo=mongoose.model("cinfo",inf)
app.post("/email",(req,res)=>{
    let v=req.body
    let ss=new email({email:v.em})
    ss.save(()=>{})
    res.redirect('home#footer')
})
app.post("/contactus",(req,res)=>{
    let v=req.body
    let ss=new cinfo({name:v.name,email:v.email,phone:v.phone,message:v.message})
    ss.save(()=>{})
    res.redirect('contact')
})
app.post("/card1",(req,res)=>{
    let v=req.body
    let ss=new Posts1({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    res.redirect("card1")

})
app.post("/card2",(req,res)=>{
    let v=req.body
    let ss=new Posts2({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts2.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card2')
    })

})
app.post("/card3",(req,res)=>{
    let v=req.body
    let ss=new Posts3({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts3.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card3')
    })

})
app.post("/card4",(req,res)=>{
    let v=req.body
    let ss=new Posts4({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts4.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card4')
    })

})
app.post("/card5",(req,res)=>{
    let v=req.body
    let ss=new Posts5({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts5.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card5')
    })

})
app.post("/card6",(req,res)=>{
    let v=req.body
    let ss=new Posts6({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts6.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card6')
    })

})
app.post("/card7",(req,res)=>{
    let v=req.body
    let ss=new Posts7({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts7.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card7')
    })

})
app.post("/card8",(req,res)=>{
    let v=req.body
    let ss=new Posts8({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts8.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card8')
    })

})
app.post("/card9",(req,res)=>{
    let v=req.body
    let ss=new Posts9({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts9.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card9')
    })

})

app.get("/likes/card/:id",(req,res)=>{
    articles.findOneAndUpdate({atitle:req.params.id},{$inc: {alikes:+1}},(err)=>{
        if(err) console.log(err)
        res.redirect('card')
        console.log(alikes)
    })
    
})
app.put("/like2",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card2'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("card2")
})
app.put("/like3",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card3'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("card3")
})
app.put("/like4",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card4'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("card4")
})
app.put("/like5",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card5'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("card5")
})
app.put("/like6",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card6'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("card6")
})
app.put("/like7",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card7'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("card7")
})
app.put("/like8",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card8'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("card8")
})
app.put("/like9",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card9'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("card9")
})
app.get("/",(req,res)=>{
    res.status(200).render("index")
})
app.get("/card1",(req,res)=>{
    let v
    
 
    Posts1.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card1"},(err,docs1)=>{
            res.status(200).render("card1.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/about",(req,res)=>{
    res.status(200).render("about",{user})
})
app.get("/contact",(req,res)=>{
    res.status(200).render("contact",{user})
})
app.get("/email",(req,res)=>{
    res.status(200).render("home#footer")
})
app.get("/card2",(req,res)=>{
    let v
    
 
    Posts2.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card2"},(err,docs1)=>{
            res.status(200).render("card2.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card3",(req,res)=>{
    let v
    
 
    Posts3.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card3"},(err,docs1)=>{
            res.status(200).render("card3.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card4",(req,res)=>{
    let v
    
 
    Posts4.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card4"},(err,docs1)=>{
            res.status(200).render("card4.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card5",(req,res)=>{
    let v
    
 
    Posts5.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card5"},(err,docs1)=>{
            res.status(200).render("card5.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card6",(req,res)=>{
    let v
    
 
    Posts6.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card6"},(err,docs1)=>{
            res.status(200).render("card6.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card7",(req,res)=>{
    let v
    
 
    Posts7.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card7"},(err,docs1)=>{
            res.status(200).render("card7.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card8",(req,res)=>{

    
 
    Posts8.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card8"},(err,docs1)=>{
            res.status(200).render("card8.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card9",(req,res)=>{
    let v
    
 
    Posts9.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card9"},(err,docs1)=>{
            res.status(200).render("card9.pug",{da:docs,l1:docs1.likes})
            v=docs.likes

        })
            }
    })
    
})
app.get('/home11/Login/Register',(req,res)=>
{
        res.render("login",{user})
})
app.get('/home11/:id',(req,res)=>{
    console.log(req.params.id)
    articles.find({uid:req.params.id},(err,docs)=>{
        console.log(docs)
        res.render("users",{doc:docs,user})
    })
})
app.post('/logindetails',(req,res)=>{
    users.findOne({uid:req.body.userid},(err,docs)=>{
        if(!docs){
            let details= new users({
                uid:req.body.userid,
                uemail:req.body.email,
                uname:req.body.name,
                upass:req.body.password,
                noofa:0
            })
            details.save(()=>{})
            var mailOptions={
                from: 'rahulrahuln2001@gmail.com',
                to:req.body.email,
                subject:'Thank You',
                text:'Hi brother/sister , Thank you for registering!!'
            }
            transporter.sendMail(mailOptions,(err,info)=>{
                console.log(err)
            })
            res.render("home",{user})
        }
        else{
            notifier.notify(
                {title: 'Error',
                message: 'UserName already exists',
                icon: path.join(__dirname, 'error.jpg'), 
                sound: true, 
                wait: true}
            )
            res.redirect("/register")
        }
    })
    
})
app.get("/register",(req,res)=>{
    res.render("register",{user})
})
app.post("/login",(req,res)=>{
    users.findOne({uid:req.body.userid},(err,docs)=>{
        if(!docs)notifier.notify({title: 'Error',
        message: 'UserName not found',
        icon: path.join(__dirname, 'error.jpg'), 
        sound: true, 
        wait: true})
        else{
            if(docs.upass==req.body.password){
                user=req.body.userid
                res.render("home",{user})
            }
            else{
                notifier.notify({title: 'Error',
                message: 'UserName/Password is wrong',
                icon: path.join(__dirname, 'error.jpg'), 
                sound: true, 
                wait: true})
            }
        }
    })
})
app.post("/upload",upload.single('image'),async (req,res)=>{
   
        users.findOneAndUpdate({uid:user},{$inc: {noofa:+0}},(err)=>{
            if(err) console.log(err)
        })
    var upload1=new articles({
        uid:user,
        atitle:req.body.atitle,
        atpara:req.body.atpara,
        aambience:req.body.ambience,
        aquality:req.body.quality,
        aprice:req.body.price,
        arating:req.body.rating,
        aimage:req.file.filename,
        aaddress:req.body.address,
        alikes:0
    })
    users.findOne({uid:user},(err,docs)=>{
        console.log(docs)
        if(docs.noofa==2){

            articles.find({},(err,docs)=>{
                console.log(docs)
                res.render("allarticles",{doc:docs,user})
            })
        }
        else if(docs.noofa<2){
            upload1.save((err,docs)=>{
        
                post.find({atitle1:docs.atitle},(err,doc)=>{
                    res.render('card',{docs,comments:doc,user})
                })
                
            })
        }
    })
   
        

})
app.get("/article/:id",(req,res)=>{
    articles.findOne({atitle:req.params.id},(err,docs)=>{
        post.find({atitle1:req.params.id},(err,doc)=>{
            res.render('card',{docs,comments:doc,l1:docs.alikes,user})
        })
    })
})
app.post("/card/:id",(req,res)=>{
    var post1=new post({
        atitle1:req.params.id,
        name:req.body.name,
        com:req.body.comm
    })
    post1.save(()=>{})
    articles.findOne({atitle:req.params.id},(err,docs)=>{
        post.find({atitle1:docs.atitle},(err,doc)=>{
            res.render('card',{docs,comments:doc,l1:docs.alikes,user})
        })
    })
})
app.post('/search',(req,res)=>
{
    articles.find({$text: {$search:req.body.search,$diacriticSensitive:true}},(err,docs)=>{
        console.log(docs)
        if(docs.length==0){
            res.render("allarticles",{doc:docs,user,notfound:"No Articles Found"})
        }
        else{
        res.render("allarticles",{doc:docs,user})}
    })
})
app.get("/allarticles",(req,res)=>{
    articles.find({},(err,docs)=>{
        console.log(docs)
        res.render("allarticles",{doc:docs,user})
    })
})
app.get("/logout",(req,res)=>{
    user="Login/Register"
    res.render("home",{user})
})
app.get('/ratings',async(req,res)=>{
    let doc
    doc=await articles.find({},(err,docs)=>{}).sort({arating:-1,}).clone()
    res.render("allarticles.pug",{doc:doc,user})
})
app.get('/date',async(req,res)=>{
    let doc
    doc=await articles.find({},(err,docs)=>{}).sort({adate:-1,}).clone()
    res.render("allarticles.pug",{doc:doc,user})
})
app.get('/likes',async(req,res)=>{
    let doc
    doc=await articles.find({},(err,docs)=>{}).sort({alikes:-1,}).clone()
    res.render("allarticles.pug",{doc:doc,user})
})
app.get('/delete/:id',(req,res)=>{
    articles.deleteOne({atitle:req.params.id},()=>{})

    res.redirect(`/home11/${user}`)
})
app.get("/newarticle",(req,res)=>{
    res.render("New_Article")
})
app.get("/home",async (req,res)=>{
    let docs=await articles.find({},(err,doc)=>{}).sort({alikes:-1}).clone()
    res.status(200).render("home",{user,docs})
})
app.listen(port,()=>{
    console.log(`Started at port ${port}`)
})
