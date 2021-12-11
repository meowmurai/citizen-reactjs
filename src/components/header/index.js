import styled from 'styled-components'
import Navbar from '../navbar'

export default function Header(){
	return(
		<>
			<Navbar/>
			<Empty/>
		</>
	)
}

const Empty = styled.div`
	width: 100%;
	height: 160px;
	margin-bottom: -160px;
	background-color: ${props => props.theme.palete.primary.main};
`