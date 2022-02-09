import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Navbar from './components/layout/Nav';

import Home from './components/pages/home/Home';
import Change from './components/pages/change/Change';
import Click from './components/pages/click/Click';
import MouseMove from './components/pages/mousemove/MouseMove';
import Submit from './components/pages/submit/Submit';
import KeyPress from './components/pages/keypress/KeyPress';

import { faHome, faMousePointer, faKeyboard, faMouse, faFileInvoice, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faHome, faMousePointer, faKeyboard, faMouse, faFileInvoice, faQuoteRight);

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/change' element={<Change/>}/>
        <Route exact path='/click' element={<Click/>}/>
        <Route exact path='/keypress' element={<KeyPress/>}/>
        <Route exact path='/mouse-move' element={<MouseMove/>}/>
        <Route exact path='/submit' element={<Submit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
