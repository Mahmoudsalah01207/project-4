import React, { useState } from 'react';
import Modal from 'react-modal';
import img1 from './image/poert1.png';
import img2 from './image/port2.png';
import img3 from './image/port3.png';

export default function PORTFOLIO() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalIsOpen(false);
  };

  return (
    <>
      <div className='text-center pb-4'>
        <h1>PORTFOLIO COMPONENT</h1>
        <div className=' w-25  m-auto d-flex justify-content-around pb-2'>
          <div className='a mx-3 bg-dark'></div>
          <i className='fa-solid fa-star'></i>
          <div className='a mx-3 bg-dark'></div>
        </div>
        <div className='row g-2 pt-2'>
          <div className='col-md-4 adam'>
            <img
              className='w-100'
              src={img1}
              alt=''
            />
            <div className='overlay '              onClick={() => openModal(img1)}
>
              <i className='fa-solid fa-plus'></i>
            </div>
          </div>
          <div className='col-md-4 adam'>
            <img
              className='w-100'
              src={img2}
              alt=''
            />
            <div className='overlay  '  onClick={() => openModal(img2)}
>
              <i className='fa-solid fa-plus'></i>
              
            </div>
          </div>
          <div className='col-md-4 adam'>
            <img
              className='w-100'
              src={img3}
              alt=''
            />
            <div className='overlay  text-center'              onClick={() => openModal(img3)}
>
              <i className='fa-solid fa-plus'></i>
            </div>
          </div>
          <div className='col-md-4 adam'>
            <img
              className='w-100'
              src={img1}
              alt=''
            />
            <div className='overlay '              onClick={() => openModal(img1)}
>
              <i className='fa-solid fa-plus'></i>
            </div>
          </div>
          <div className='col-md-4 adam'>
            <img
              className='w-100'
              src={img2}
              alt=''
            />
            <div className='overlay  '  onClick={() => openModal(img2)}
>
              <i className='fa-solid fa-plus'></i>
              
            </div>
          </div>
          <div className='col-md-4 adam'>
            <img
              className='w-100'
              src={img3}
              alt=''
            />
            <div className='overlay  text-center'              onClick={() => openModal(img3)}
>
              <i className='fa-solid fa-plus'></i>
            </div>
          </div>
        </div>
        
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>Close Modal</button>
        {selectedImage && <img src={selectedImage} alt='' />}
      </Modal>
    </>
  );
}