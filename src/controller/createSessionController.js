
const createSession = (req, res)=>{
  try {
   const {name} = req.body;
   req.session.userName = name;
   res.status(201).json({
    success: true
   })
  } catch (error) {
    console.log(error);
  }
}

module.exports = {createSession}