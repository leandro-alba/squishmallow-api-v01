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
  };
  