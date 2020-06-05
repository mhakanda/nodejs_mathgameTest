const express = require("express")
const path  = require("path")
const app = express()
const port  = process.env.PORT || 3000;
const statictPath = path.join(__dirname) + '/public'
//console.log(path.join(__dirname))
app.use(express.static(statictPath));

app.get('/',(req,res)=>{
    res.send(' ');
    
    });
    
app.get('/data',(req,res)=>{
      res.send('<h1> Game Data</h1>');
      
  });
  app.get('/SignIn',(req,res)=>{
    res.send('<h1> Sign In</h1>');
    
});
app.get('/ContactUs',(req,res)=>{
  res.send('<h1> Contact Us</h1>');
  
});

app.listen(port,()=>{
        console.log(`Server is up at port ${port}`);
      });