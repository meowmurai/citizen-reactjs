import styled from 'styled-components'
export default function Footer(){

    return (

        <Foot>
        </Foot>
    )
}
const Foot = styled.div`
    background-color: ${props=> props.theme.palete.primary.main};
    height: 50px;
    width: 100%;
`