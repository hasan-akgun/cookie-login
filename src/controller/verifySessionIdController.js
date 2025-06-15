const verifySessionId = (req, res)=>{
  if(req.session && req.session.userName){
    console.log("Session verified")
    res.status(201).json({
      success: true
    })
  }else{
    console.log("wrong")
    res.status(500).json({
      success: false
    })
  }
}

module.exports={verifySessionId}