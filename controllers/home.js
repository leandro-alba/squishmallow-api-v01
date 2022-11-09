const Squishmallow = require("../models/Squishmallow");

module.exports = {
    getIndex: async (req, res) => {
      try{
        //const posts = await Post.find().populate('user').sort({ createdAt: 'desc' }).lean();
        res.render('index.ejs');
      }catch (err){
        console.log(err)
      }
    },
    getAdmin: async (req,res)=>{
      try{
        res.render('admin.ejs')
      }catch(err){
        console.log(err)
      }
    },
    getApi: async (req,res) => {//works!
      try{
        const squishes = await Squishmallow.find()
        res.json(squishes)
      }catch(err){
        res.status(500).json({message: err.message})// 500 = server side error 
      }
    },
    getApiName: async (req,res) => {
      try{
        //const squish = await Squishmallow.find({name :req.body.name})
        const squish = await Squishmallow.find(req.params.name)
        //console.log(req.params.name)
        res.json(squish)
      }catch(err){
        console.log(err)
      }
    },
    getApiById: async (req,res) => {
      try{
        //const squish = await Squishmallow.find({name :req.body.name})
        const squish = await Squishmallow.findById(req.params.id)
        //console.log(req.params.name)
        res.json(squish)
      }catch(err){
        console.log(err)
      }
    }
  };
  