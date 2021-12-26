import styled from 'styled-components'

export const Card = styled.div`
	width: 100%;
	color: ${props => props.theme.palete.gray};
	border-radius: 12px;
	overflow: hidden;
`	
export const CardHeader = styled.div`
	color: ${props => props.theme.palete.black};
	background-color: ${props => props.theme.palete.secondary.lighter};
	border-bottom: 2px solid ${props => props.theme.palete.backColor};
	padding: 0.75rem 1.5rem;
	font-weight: 500;

	min-height: 4.2rem;
	display: flex;
	
	justify-content: flex-start;
	align-items: center;
	@media screen and (max-width: 768px){
		padding: 0.75rem 1rem;
	}
`
export const CardContent = styled.div`
	position: relative;
	background-color: ${props => props.theme.palete.secondary.lighter};
	@media screen and (max-width: 768px){
		padding: 0.75rem 1rem;
	}
` 
export const CardTitle = styled.span`
	marginRight: auto;
	overflow: hidden;
`