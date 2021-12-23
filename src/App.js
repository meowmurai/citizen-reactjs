import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {GlobalStyle,theme} from './globalStyle'
import { ThemeProvider } from 'styled-components'


import Header from './views/header'
import Landing from './views/landing'
import Home from './views/home'
import Users from './views/users'
import Locations from './views/locations'
import Notification from './views/notification'
import OverlayProvider from './views/overlay'
import ModalProvider from './views/modal'
function App() {
    

    return (
        <div className="App">
          <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Router>
                <OverlayProvider />
                <Notification/>
                <ModalProvider/>
                <Header/>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/home'>
                        <Route path='/home/users' element={<Users/>}/>
                        <Route path='/home/locations' element={<Locations/>}/>
                    </Route>
                </Routes>
            </Router>
           </ThemeProvider>
        </div>
    );
}

export default App;
