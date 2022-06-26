const express = require('express')
const router = express.Router()
const PostModel = require('../models/Post')


// index
router.get('/', async (req,res) => {
  try {
    const post = await PostModel.find();
    res.json(post)
  } catch (error) {
    
  }
})


// store
router.post('/',async (req,res) => {
  const data = new PostModel({
    title:req.body.title,
    desc:req.body.desc
  })

  try{
    const saveddata = await data.save();
  
    res.json(saveddata);
  }catch(err){
    res.json({message:err})
  }
})

// show
router.get('/:postId',async(req,res) => {
  try {
    const post = await PostModel.findById(req.params.postId)
    res.json(post)
  } catch (error) {
    res.json({error})
  }
} )

router.patch('/:postId', async (req,res) => {
  try {
    
    const updatedData = await PostModel.updateOne({_id:req.params.postId},{$set:{
      title:req.body.title,
      desc:req.body.desc
    }})
    res.json(updatedData)
  } catch (error) {
    res.json({error})
  }
})

// destroy
router.delete('/:postId',async(req,res) => {
  try {
    const post = await PostModel.remove({_id:req.params.postId})
    res.json(post)
  } catch (error) {
    res.json({error})
  }
})

module.exports = router;