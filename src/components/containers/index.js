import styled from 'styled-components'

export const Grid = styled.div`
	display: ${props => props.container ? 'flex' : 'block'};

	padding: 0 4px;

	flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};

	justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};

	align-content: ${props => props.alignContent ? props.alignContent : 'center'};

	flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};

	width: 100%;
	${props => ({...props.sx})};
	@media screen and (max-width: 768px){
		padding: 0;
		width: ${props => props.sm ? `${props.sm/12*100}%` : 'auto'};
	}
	@media screen and (min-width: 768px){
		width: ${props => props.md ? `${props.md/12*100}%` : 'auto'};
	}
	@media screen and (min-width: 1280px){
		width: ${props => props.lg ? `${props.lg/12*100}%` : 'auto'};
	}
`

export const OuterContainer = styled.div`
	padding: 0 ${props => props.theme.spacing.container_gutter_sm};
	@media screen and (min-width: 768px){
		padding: 0 ${props => props.theme.spacing.container_gutter_md};
	}
	@media screen and (min-width: 1280px){
		padding: 0 ${props => props.theme.spacing.container_gutter_lg};
	}
`