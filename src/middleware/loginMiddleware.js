const {connectDb, closeDb} = require("../config/configdb");

const verifyUser = async (req, res)=>{
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
      res.status(201).json({
        success: true
      })
    }
    else{
      res.status(404).json({
        success: false
      })
    }
    
  } catch (error) {
    console.log(error);
  }
  finally{
    await closeDb();
  }
}

module.exports={verifyUser}