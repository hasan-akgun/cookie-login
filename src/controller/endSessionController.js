const endSession = (req, res)=>{
  req.session.destroy();
  res.status(200).json({
    success: true
  })
}

module.exports = endSession