import { useState } from 'react'
import logo from './assets/logo-removebg-preview (1).png'

const Landing = ()=>{

  return (
    <div className='h-screen grid place-content-center justify-items-center m-auto' style={{ backgroundColor: '#BC157C' }}>
      <img src={logo} alt="" />
      <h1 className='mt-16 text-3xl text-white'>Banco de Guayaquil</h1>
      <h1 className='mt-6 text-2xl text-white'>Primero tu!</h1>
      <button className='mt-10 bg-pink-700 hover:bg-blue-700 text-white h-12 w-32 border-black rounded-lg'>Seguir</button>
    </div>
  );
  
}


export default Landing