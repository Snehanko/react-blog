import React,{useState,useContext,useId} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { postContext } from '../App';


function AddPost() {

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate=new Date();
  var id=useId();

  const form = useForm({
    defaultValues:{
      id:id=useId(),
      author:"",
      title:"",
      post:"",
      date:currentDate.toLocaleDateString("en-US", options)
    }
  })

  const {register,handleSubmit,formState} = form
  const {posts,setPost} = useContext(postContext)
  const {errors} = formState
  
  const navigate = useNavigate();
  
  const onSubmit = (data) => {
    const newBlog={ id:data.id, title:data.title, summary:data.post, author:data.author, date:data.date};
    setPost([...posts,newBlog])
    console.log(posts)
    navigate("/")
    
  }

  return (
    <div className='post-container '>
      <h1>AddPost</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='post-form'>
          <div>
            <label>Author</label>
            <input type='text' id='author' {...register("author",
              {
                required:{value:true, message:"Enter your Name"}
              }
            )}/>
            <p className='error'>{errors.author?.message}</p>
          </div>
          <div>
            <label>Title</label>
            <input type='text' id='title' {...register("title",
              {
                required:{value:true, message:"Enter your title of your Blog"}
              }
            )}/>
            <p className='error'>{errors.title?.message}</p>
          </div>
          <div>
            <label>Post</label>
            <input type='text' id='post' {...register("post",
              {
                required:{value:true, message:"Type your blog"}
              }
            )}/>
            <p className='error'>{errors.post?.message}</p>
          </div>
          <div>
            <label>Date</label>
            <input type='date' id='date' placeholder={currentDate.toLocaleDateString("en-US", options)} {...register("date")}>
            </input>
          </div>
          <button>Submit</button>
      </form>
    </div>
  )
}

export default AddPost