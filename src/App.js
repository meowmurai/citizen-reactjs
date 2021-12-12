import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {GlobalStyle,theme} from './globalStyle'
import { ThemeProvider } from 'styled-components'


import Header from './components/header'
import Landing from './views/landing'
import Home from './views/home'

import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </Router>
       </ThemeProvider>
    </div>
  );
}

export default App;
