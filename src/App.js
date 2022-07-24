import React from 'react'
import './App.css'
import { Brand, CTA, Navbar } from './Components'
import { Footer, Blog, Header, Features, Possibility,WhatGPT3 } from './Containers'

export default function App() {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3 />
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}
