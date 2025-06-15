const {connectDb, closeDb} = require("../config/configdb");

const verifyUser = async (req, res, next)=>{
  const {name, password} = req.body;


  try {
    const collection = await connectDb("users");

    const user = await collection.find({name: name}).toArray();
    console.log(user)
    if(user.length===0){
      res.status(404).json({
        success: false
      })
      return
    }

    if(user[0].password === password){
      next();
    }
    else{
      res.status(404).json({
        success: false
      })
      return;
    }
    
  } catch (error) {
    console.log(error);
  }
  finally{
    await closeDb();
  }
}

module.exports={verifyUser}