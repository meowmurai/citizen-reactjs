import styled from 'styled-components'
import { OuterContainer } from '../../_components/containers'

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