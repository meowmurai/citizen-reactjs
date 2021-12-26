import { useSelector } from "react-redux"
import styled from "styled-components"

import LoginForm from "../views/modal/login.user"
export function AuthenticationProvider({children, roleAccepted}){
    const loggedIn = useSelector(state => state.authentication.loggedIn)
    
    if(loggedIn){
        return (
            <>{children}</>
        )
    }
    else{
        return (
            <Background>
                <LoginForm show={true}/>
            </Background>
        )
    }
}

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-image: url('./imgs/background.webp');
    background-size: cover;

    &:after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: #000;
        opacity: 0.3;

    }
`
