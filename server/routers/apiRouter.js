const express = require("express");
const router = express.Router();
const blog = require("../models/blog");
/*
      USAGE : Get all the blogs
      URL : http://127.0.0.1:5000/api/blog
      METHOD : GET
      FIELDS : No Fields
*/

router.get("/blog", async (req, res) => {
   try {
      let blogs = await blog.find();
      res.status(200).json(blogs);
   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: error.message,
      });
   }
});

/*
      USAGE : Get a single blog
      URL : http://127.0.0.1:5000/api/blog/:id
      METHOD : GET
      FIELDS : No Fields
*/
router.get("/blog/:id", async (req, res) => {
   try {
      let blogId = req.params.id;
      let blogs = await blog.findById(blogId);
      res.status(200).json(blogs);
   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: error.message,
      });
   }
});

/*
      USAGE : Create a blog
      URL : http://127.0.0.1:5000/api/blog/:id
      METHOD : POST
      FIELDS : name, image, price, content, info
*/

router.post("/blog", async (req, res) => {
   try {
      let newblog = {
         name: req.body.name,
         image: req.body.image,
         price: req.body.price,
         content: req.body.content,
         info: req.body.info,
      };
      //blog is exists or not
      let blogs = await blog.findOne({
         name: newblog.name,
      });
      if (blogs) {
         return res.status(401).json({
            msg: "blog is already exits",
         });
      }
      blogs = new blog(newblog);
      blogs = await blogs.save(); //insert the product to database
      res.status(200).json({
         result: "blog is created successfully",
         blog: blogs,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: error.message,
      });
   }
});

/*
      USAGE : Update a blog
      URL : http://127.0.0.1:5000/api/blog/:id
      METHOD : PUT
      FIELDS : name, image, price, content, info
*/

router.put("/blog/:id", async (req, res) => {
   let blogId = req.params.id;
   try {
      let updatedblog = {
         name: req.body.name,
         image: req.body.image,
         price: req.body.price,
         content: req.body.content,
         info: req.body.info,
      };
      //product is exit or not
      let blogs = await blog.findById(blogId);
      if (!blogs) {
         return res.status(401).json({
            msg: "No blog Found",
         });
      }
      //update the blog
      blogs = await blog.findByIdAndUpdate(
         blogId,
         {
            $set: updatedblog,
         },
         { new: true }
      );
      res.status(200).json({
         result: "product is updated",
         product: blogs,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: error.message,
      });
   }
});

/*
      USAGE : Delete a blog
      URL : http://127.0.0.1:5000/api/blog/:id
      METHOD : DELETE
      FIELDS : No - Fields
*/
router.delete("/blog/:id", async (req, res) => {
   try {
      let blogId = req.params.id;
      let blogs = await blog.findById(blogId); //product is exit or not
      if (!blogs) {
         return res.status(401).json({
            msg: "No blog Found",
         });
      }
      //delete the product
      blogs = await blog.findByIdAndDelete(blogId);
      res.status(200).json({
         result: "product is deleted",
         product: blogs,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: error.message,
      });
   }
});

module.exports = router;
