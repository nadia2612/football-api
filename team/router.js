const {Router}=require("express")
const Team=require("./model")

const router = new Router()
router.get('/team', (req, res,next) => {
Team.findAll()
  .then((teams)=>{
    console.log("found teams", teams);
    
    res.send(teams)}
    )
.catch(err => {
  console.log("got here");
  
  next()}
  )

}
)
module.exports = router