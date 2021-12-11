import styled  from 'styled-components'

export const Overlay = styled.div`
	background-color: #000;
	opacity: 0.4;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	${props => props.show? 'display: block;' : 'display: none;'}

`