import React from 'react'
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='notFoundDiv'>
      <h1 className='header1'>Üzgünüz, bu sayfaya ulaşılamıyor</h1>
      <p className='line1'>Tıkladığınız bağlantı bozuk olabilir veya sayfa kaldırılmış olabilir.</p>
      <img className='img-eror' src='../img/notfound.png'width={200}/>
      <p><a className='link' href='/'>Ana Menüye Geri Dön</a></p>
    </div>
  )
}

export default NotFound