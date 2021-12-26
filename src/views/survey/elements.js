import styled from "styled-components";
import { Input, Button, Card, CardHeader, CardContent } from "../../_components"

export const StyledCard = styled(Card)`
    background-color: ${props => props.theme.palete.secondary.lighter};
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
`
export const StyledButton = styled(Button)`
    
    width: 80%;
    padding: 8px 12px;
    &:hover {
        background-color: ${props => props.theme.palete.secondary.lighter};
        color: ${props => props.theme.palete.primary.main};
    }
    &:after{
        display: none;
    }
    @media screen and (max-width: 768px){
        width: 40%;
    }
`
export const Panel = styled(CardHeader)`
    background-color: ${props => props.theme.palete.primary.main};
    border-radius: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: space-between;

    height: 100%;
    overflow: hidden;
    @media screen and (min-width: 768px) { 
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-start;
    }
    & > button:last-child{
        margin-bottom: auto;
    }
`
export const StyledCardContent = styled(CardContent)`
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
`
export const CustomInput = styled(Input)`
    width: 100%;
`