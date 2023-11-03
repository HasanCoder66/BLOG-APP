import React from "react";
import "./blogview.css";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
function BlogView() {

  const allBlogs = JSON.parse(localStorage.getItem('allBlogs')) || []

  const navigate = useNavigate()


  const user = useRef()
  const blogcontent = useRef()
  const blogdescription = useRef()
  const blogtitle = useRef()

  function createBlogHandler() {
    console.log(user.current.value);
    console.log(blogcontent.current.value);
    console.log(blogdescription.current.value);
    console.log(blogtitle.current.value);

    const blog = {
      username: user.current.value,
      blogcontent: blogcontent.current.value,
      blogdescription: blogdescription.current.value,
      blogtitle: blogtitle.current.value
    }

    allBlogs.push(blog)

    localStorage.setItem('allBlogs', JSON.stringify(allBlogs))
    toast.success('blog added')
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }

  return (
    <>
      {/* <div className="perblog">
        <p className="perbloguser">adasfj</p>
        <div className="blogcontent">
          hasan ka blog post
          <h1 className="perblogtitle"> maha pan</h1>
          <p className="perblogbody"> ashhad maha </p>
        </div>
      </div> */}
      <input
        placeholder="User Name"
        type="text"
        className="loginInput"
        ref={user}
      />
      <input
        placeholder="Blog Content"
        ref={blogcontent}
        type="text"
        className="loginInput"
      />
      <input
        ref={blogtitle}
        placeholder=" Blog Title"
        type="text"
        className="loginInput"
      />
      <input
        ref={blogdescription}
        placeholder="Blog description "
        type="text"
        className="loginInput"
      />
      <button className="button" onClick={createBlogHandler}>Create blog</button>
      <ToastContainer />
    </>
  );
}

export default BlogView;
