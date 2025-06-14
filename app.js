const express = require("express");
const app = express();

const loginRoute = require("./src/routes/loginRoute")

app.set('view engine', 'pug')
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/login', loginRoute)

app.get('/', (req,res)=>{
  res.render('index');
})

try {
  app.listen(3000, ()=>{
    console.log("server running")
  })  
} catch (error) {
  console.log(error);  
}
