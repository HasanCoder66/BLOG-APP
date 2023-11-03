import React from "react";
import './blogview.css'
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged , auth } from "../../firebase/config.js";
function BlogView() {

  const allBlogs = JSON.parse(localStorage.getItem('allBlogs')) || []

  const navigate = useNavigate()


  const user = useRef()
  const blogcontent = useRef()
  const blogdescription = useRef()
  const blogtitle = useRef()

  function createBlogHandler () {
    // console.log(user.current.value);
    // console.log(blogcontent.current.value);
    // console.log(blogdescription.current.value);
    // console.log(blogtitle.current.value);

    const blog = {
      username: user?.current?.value,
      blogcontent: blogcontent?.current?.value,
      blogdescription: blogdescription?.current?.value,
      blogtitle: blogtitle?.current?.value
    }

    allBlogs.push(blog)

    localStorage.setItem('allBlogs', JSON.stringify(allBlogs))
    toast.success('blog added')
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user)
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    <div className='parent'>
      
      <input
        placeholder="User Name"
        type="text"
        className="userInput"
        ref={user}
      />
      <input
        placeholder="Blog Content"
        ref={blogcontent}
        type="text"
        className="blogInput"
      />
      <input
        ref={blogtitle}
        placeholder=" Blog Title"
        type="text"
        className="blogTitleInput"
      />
      <input
        ref={blogdescription}
        placeholder="Blog description "
        type="text"
        className="blogDescInput"
      />
      <button className="button" onClick={createBlogHandler}>Create blog</button>
      <ToastContainer />
    </div>
  );
}

export default BlogView;
