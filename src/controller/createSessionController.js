
const createSession = (req, res)=>{
  try {
   const {name} = req.body;
   req.session.userName = name;
   console.log("Session created")
   res.status(201).json({
    success: true
   })
  } catch (error) {
    console.log(error);
  }
}

module.exports = {createSession}