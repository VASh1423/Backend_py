import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar/>
    </div>
  );
}

export default App;
