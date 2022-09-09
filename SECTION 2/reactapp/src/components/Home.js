// 1. components are simple js functions
// 2. function name should always strt with Uppercase letter
// 3. function should always return a single JSX element 
// 4. function should be exproted
// 5. shortcut ..rafce..

import React from 'react'
import './Home.css';
import logo from '../logo.svg';

const Home = () => {
  return (
    <>
    <div className='App'>
        <h1 className="head1" style={ { color : 'cyan', backgroundColor : 'black' } }>MY HOME PAGE</h1>
        <hr />
        <button className='btn btn-warning'>Bootstrap</button>
        <img src={logo} />
        
    </div>
    <div>

    </div>
    </>
  );

}

export default Home;