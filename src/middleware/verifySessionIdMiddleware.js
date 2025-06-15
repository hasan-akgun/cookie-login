const verifySessionId = (req, res, next)=>{
  if(req.session && req.session.userName){
    console.log("Session verified")
    res.status(201).json({
      success: true
    })
    next();
  }else{
    console.log("wrong")
    res.status(500).json({
      success: false
    })
  }
}

module.exports={verifySessionId}