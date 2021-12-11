import styled from 'styled-components'

export const Hero = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 16px;
	background-color: ${props => props.theme.palete.secondary.main};
`
export const Logo = styled.div`
	width: 300px;
	height: 300px;
`
export const Container = styled.div`
	display: flex;
	width: 80%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	@media screen and (max-width: 1200px){
		width: 100%;
		
	}
`
export const Context = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: nowrap;
	@media screen and (max-width: 1200px){
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
	}

`
export const Survey = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100%;
	padding: 0 64px;
	border-right: 2px solid #8f8f8f;
	@media screen and (max-width: 1200px){
		width: 60%;
		border: none;
	}
	@media screen and (max-width: 768px){
		width: 80%;
		
	}

`
export const Row = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 8px 0;
`
export const About = styled.div`
	width: 50%;
	padding: 0 64px;
	@media screen and (max-width: 1200px){
		width: 80%;
	}
`