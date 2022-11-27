const Squishmallow = require("../models/Squishmallow");


module.exports = {
//   getProfile: async (req, res) => {
//     try {
//       const posts = await Post.find({ user: req.user.id });
//       res.render("profile.ejs", { posts: posts, user: req.user });
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   getFeed: async (req, res) => {
//     try {
//       const posts = await Post.find().sort({ createdAt: "desc" }).lean();
//       res.render("feed.ejs", { posts: posts });
//     } catch (err) {
//       console.log(err);
//     }
//   },
   getSquish: async (req, res) => {
     try {
       const comments = await Comment.find({postId: req.params.id})
       const posts = await Post.findById(req.params.id);
       res.render("post.ejs", { posts: posts, user: req.user, comments: comments });
     } catch (err) {
       console.log(err);
     }
   },
  addSquish: async (req, res) => {
    try {

      await Squishmallow.create({
        name: req.body.name,//comes from the form
        image: req.body.image,
        type: req.body.type,
        brand: req.body.brand,
        color: req.body.type,
        size: req.body.size,
        collectorNumber: req.body.collectorNumber,
        squad: req.body.squad,
        releaseDate: req.body.releaseDate,
        bio: req.body.bio,
        appearance: req.body.appearance,
        thankyous: req.body.thankyous,
        seenOn: req.body.seenOn,
        variants: [{
          otherName: req.body.otherName,
          img: req.body.img,
          notableChanges: req.body.notableChanges,
          collectionSquad: req.body.collectionSquad,
        }]//it worked with square brackets, so if it doesnt work today, thats why
      });
      console.log("Squish has been added!");
      res.redirect("/admin");
    } catch (err) {
      console.log(err);
    }
  },
  deleteSquish: async (req, res) => {
    try {
      // Delete post from db
      await Squish.remove({ _id: req.params.id });
      console.log("Deleted Squish XD");
      res.redirect("/admin");
    } catch (err) {
      res.redirect("/admin");
    }
  },
};
