// components/Sunny.js
import React from 'react';
import Header from './header';
import '../styles/Landing_page.css';
import { Link } from 'react-router-dom';

function Landing_page() {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <div className='Welcome_div'>
        <h1>Welcome To AppraiseMe</h1>
        <h3>The easiest way to measure soft skills</h3>
        <Link to="/start">
          <button>Get Started</button>
        </Link>

        <p>Trusted by</p>

        <div>
          <img src="microsoft.png" alt="" />
          <img src="airbnb.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Landing_page;
