import React,{useState} from 'react'
import { useForm } from 'react-hook-form'


function AddPost() {

  const [posts,setPost]=useState( [
      { id: 1, title: "First Post", summary: "This is the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ullamcorper metus, nec ullamcorper eros rhoncus rhoncus. Donec nunc turpis, cursus eget aliquam quis, aliquet non dolor. Fusce condimentum faucibus.",author:"John doe" },
      { id: 2, title: "Second Post", summary: "This is the second blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ullamcorper metus, nec ullamcorper eros rhoncus rhoncus. Donec nunc turpis, cursus eget aliquam quis, aliquet non dolor. Fusce condimentum faucibus.", author:"Petter Kint" },
    ])

  
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate=new Date();

  const form = useForm({
    defaultValues:{
      author:"",
      title:"",
      post:"",
      date:currentDate.toLocaleDateString("en-US", options)
    }
  })

  const {register,handleSubmit,formState} = form
  const {errors} = formState
  
  const onSubmit = (data) => {
    const newBlog={ title:data.title, summary:data.post, author:data.author};
    setPost([...posts,newBlog])
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