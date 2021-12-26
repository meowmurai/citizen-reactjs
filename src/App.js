import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {GlobalStyle,theme} from './globalStyle'
import { ThemeProvider } from 'styled-components'


import Header from './views/header'
import Landing from './views/landing'
import Users from './views/users'
import Locations from './views/locations'
import Notification from './views/notification'
import Survey from './views/survey'

import OverlayProvider from './views/overlay'
import ModalProvider from './views/modal'

import {RoleProtected} from './routing'
import {AuthenticationProvider} from './routing'
import Footer from './views/footer';

function App() {
    

    return (
        <div className="App">
          <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Router>
                <OverlayProvider />
                <Notification/>
                <ModalProvider/>
                <AuthenticationProvider>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Users/>}/>
                        <Route path='/home'>
                            <Route path='/home/users' element={<Users/>}/>
                            <Route path='/home/locations' element={<Locations/>}/>
                            <Route 
                                path='/home/survey' 
                                element={
                                <RoleProtected roleAccepted={["B1", "B2"]}>
                                    <Survey/>
                                </RoleProtected>}   
                            />
                        </Route>
                    </Routes>
                    <Footer/>
                </AuthenticationProvider>
            </Router>
           </ThemeProvider>
        </div>
    );
}

export default App;
