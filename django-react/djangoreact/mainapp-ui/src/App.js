import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navigation/Navbar';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import CategoryDetail from './components/Category/CategoryDetail';
import PostDetail from './components/Posts/PostDetail';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/posts/:id' exact component={PostDetail}></Route>
          <Route path='/category/:id' exact component={CategoryDetail}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
