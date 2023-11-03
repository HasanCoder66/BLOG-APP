import React from "react";
import "./blogview.css";
import { useRef } from "react";
function BlogView() {

  const user = useRef()
  const blogcontent = useRef()
  const blogdescription = useRef()
  const blogtitle = useRef()
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
    </>
  );
}

export default BlogView;
