import styled from 'styled-components'

export const LoginContainer = styled.div`
	position: relative;
	top: 0;
	left: 0;
	width: 30%;
	min-width: 300px;
	height: 0;
	z-index: 10;
	margin: auto;
	display: flex;
	justify-content:center;
`

export const Login = styled.div`
	background-color: #fff;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
	border-radius: 10px;
	padding: 16px;
	transition: 0.2s all ease-in-out;
	@keyframes appear{
		0%{top: -500px;}
		100%{top: 100px;}
	}
	
	${props => props.show? `animation: appear;` : 'top: -800px;'}
`

export const Row = styled.div`
	width: 80%;
	margin: 10px;
	display: flex;
	justify-content: center;
`