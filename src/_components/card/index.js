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

	display: flex;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 768px){
		padding: 0.75rem 1rem;
	}
`