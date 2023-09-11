import React from 'react';
import adam from './image/happy.png';

export default function Logo() {
  return (
    <>
      <div className='vh-100 bg-success text-center pt-0 mt-0  overflow-hidden'>
        <div className='col-md-6 m-auto mt-3 pt-5'>
          <img className='w-50 ' src={adam} alt='' />
        </div>
        <h1 className='text-white'>START FRAMEWORK</h1>
        <div className=' w-25  m-auto d-flex justify-content-around pb-2'>
        <div className="a mx-3"> </div>
            <i className="fa-solid fa-star  text-white"></i>
            <div className="a mx-3"></div>
        </div>
   
        <h3 className='text-white'>Graphic Artist - Web Designer - Illustrator</h3>
      </div>
    </>
  );
}