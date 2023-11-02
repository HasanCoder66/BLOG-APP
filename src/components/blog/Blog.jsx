import React from 'react'

function Blog () {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #7749F8 !important;">
    <div className="container-fluid">
        <a className="navbar-brand" href="#" style=" color: white !important;">Personal Blog App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a href="../editProfile/editiProfile.html" className="nav-link mb-0 loggedInUserName" style=" color: white !important;">username</a>
                <p className="nav-link active mb-0 logoutBtn" style=" color: white !important;">logout</p>
            </div>
        </div>
    </div>
</nav>

{/* // <!-- -------------------Main-------------------- --> */}
<div className="container mainContainer">
    <div className="pageHeader my-5">
        <h1>
            Dashboard
        </h1>
    </div>
    <div className="postBlogConatiner postConatiner">
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Blog Title</label>
            <input type="text" className="form-control" id="blogTitleInput" placeholder="Title">
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Blog</label>
            <textarea className="form-control" id="blogTextArea" rows="3"></textarea>
        </div>
        <button type="button" className="btn btn-primary publishBtn">Publish Blog</button>
    </div>


    {/* <!-- <div className="pageHeader my-5">
        <h1>
            Good Morning Readers!
        </h1>
    </div> --> */}

    <h1 className="my-5">My Blogs</h1>

    <div className="blogContainer">

        <div className="postConatiner postInputContainer my-3 ">
            <div className="d-flex justify-content-between ">
                <div className="authorsDetails d-flex align-items-center">
                    <div className="post-header-container d-flex align-items-center">
                        <div className="image">
                            <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1685543404~exp=1685544004~hmac=d07ea3ce3ef8f3935685c31c8166ad233839e12607dfb08424f2e5a129f3d691"
                                alt="" className="img-fluid rounded mx-auto d-block">
                        </div>
                        <div className="userName-id ms-2">
                            <h4 className="mb-1 blogTitle" style="color: #868686;">
                                title</h4>
                            <div className="d-flex align-items-center justify-content-center">
                                <h6 className="mb-1 username">username</h6>
                                <h6 className="mb-0 ms-2">1 hour</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" style="background-color: #282828; border-color: #282828;"
                        type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <ul className="dropdown-menu" style="background-color: #282828;">
                        <li><a className="dropdown-item">Edit</a></li>
                        <li><a className="dropdown-item">Delete</a></li>
                    </ul>
                </div>
            </div>
            <div className="blogDetails">
                <p id="post-text" className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis
                    voluptatibus fugit sequi architecto quidem. Beatae dolore aliquam commodi, sint accusamus aut
                    iusto
                    sapiente quisquam placeat, consequatur odio voluptatem obcaecati?</p>
            </div>
        </div>
    </div>

</div>
</div>
</>


  )
}

export default Blog