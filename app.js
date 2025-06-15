const express = require("express");
const cookieParser = require("cookie-parser")
const session = require("express-session");
const app = express();
require("dotenv").config();

const {verifySessionId}= require("./src/middleware/verifySessionIdMiddleware")

const loginRoute = require("./src/routes/loginRoute");

app.set('view engine', 'pug')
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET, // Güvenlik için önemli
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 1000 * 60 * 60,
    httpOnly: true, // XSS saldırılarına karşı koruma
  }
}))



app.use('/api/login', loginRoute)

app.get('/', (req,res)=>{
  res.render('index');
})

app.get('/dash', verifySessionId,(req,res)=>{
  res.render('dash');
})

try {
  app.listen(3000, ()=>{
    console.log("server running")
  })  
} catch (error) {
  console.log(error);  
}
