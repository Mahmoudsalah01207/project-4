import React from 'react'

export default function Contact() {
  return (
    <>
    <div  className='vh-100  overflow-hidden '>
    <h1 className='text-center mt-5'>CONATCT SECTION</h1>
    <div className=' w-25  m-auto d-flex justify-content-around pb-2'>
        <div className="a mx-3 bg-dark"> </div>
            <i className="fa-solid fa-star"></i>
            <div className="a mx-3 bg-dark"></div>
        </div>
   <form className='w-50 m-auto '>
  <div className="form-group mt-5 pb-3">
    <input  className="form-control p-3"   placeholder="username" />
  </div>
  <div className="form-group pb-3 ">
    <input  className="form-control p-3"  placeholder="user age" />
  </div>
  <div className="form-group pb-3">
  <input type="email" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
</div>

  <div className="form-group pb-3">
    <input type="password" className="form-control p-3" id="exampleInputPassword1" placeholder="Password" />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}
