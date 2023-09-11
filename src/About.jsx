import React from 'react'

export default function About() {
    return (
        <>
            <div className='vh-100 bg-success d-flex align-items-center text-center overflow-hidden pt-0 mt-0'>
                <div className="row  d- flex justify-content-center">
                    <div className="col-md-12 flex-wrap">
                        <h1 className='fs-1 text-white pb-2'>ABOUT COMPONENT</h1>
                        <div className=' w-25  m-auto d-flex justify-content-around pb-2'>
                            <div className="a mx-3"> </div>
                            <i className="fa-solid fa-star  text-white"></i>
                            <div className="a mx-3"></div>
                        </div>
                    </div>
                    <div className='col-md-5 text-white text-start'>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className='col-md-5 text-white text-start'>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>


        </>
    )
}
