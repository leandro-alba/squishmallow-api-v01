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
        const squishes = await Squishmallow.find().limit(5)
        res.json(squishes)
      }catch(err){
        res.status(500).json({message: err.message})// 500 = server side error 
      }
    },
    getApiName: async (req,res) => {
      try{
        let name = req.params.name.toLowerCase()
        if(name === 'ace'){
          const squish = await Squishmallow.findById('63668435570a999f14ee2297')//works but this requires hardcoding the id string, will keep an eye out for a more efficent way to do this. Happy I found a solution after searching for a while lol. asked on discord for help.
          res.json(squish)
        }else if(name === 'connor'){
          const squish = await Squishmallow.findById('636680a5570a999f14ee2295')
          res.json(squish)
        }else if(name === 'aldron'){
          const squish = await Squishmallow.findById('636c0a703f4fc63328abdd31')
        }else{ res.json('squish not found 😵‍💫') }
        //const squish = await Squishmallow.findOne({ "name": { $all: `${name}`}}) //code given to me by fellow 100dev alumi
        res.json(squish)
      }catch(err){
        res.status(500).json({message: err.message})
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
    },
    getApiRandom: async (req,res) => {
      try{
        const ids = ['636c0a703f4fc63328abdd31','636680a5570a999f14ee2295','63668435570a999f14ee2297']
        const getRandomizedIndex = Math.floor(Math.random()* 3)//this works, tested in the console, returns a random whole integar
        const squish = await Squishmallow.findById(ids[getRandomizedIndex])//WORKS!
        res.json(squish)
      }catch(err){
        res.status(500).json({message: err.message})
      }
    }
  };
  