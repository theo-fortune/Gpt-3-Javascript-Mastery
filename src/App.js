import React, { Component } from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { Article, Brand, Feature } from './components';
import Navbar from './components/navbar/Navbar';
import Cta from './components/cta/Cta';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App