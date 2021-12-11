import styled from 'styled-components'
import { OuterContainer } from '../../components/containers'

export const Container = styled(OuterContainer)`
	background-color: transparent;
	color: ${props => props.theme.palete.secondary.main};
`

export const Title = styled.h2`
	font-weight: 500;
`

export const Row = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
`
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
	padding: 12px;
	padding-left: 1.5rem;
	font-weight: 500;
`