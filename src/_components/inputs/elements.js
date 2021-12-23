import styled from 'styled-components'

export const InputContainer = styled.div`
	display: inline-block;
	position: relative;

	&.collapse {
		width: fit-content;
	}
`

export const StyledInput = styled.input`
	width: 100%;
	height: 2.5rem;
	padding: 10px 8px 8px 8px;
	border: 1px solid #808080;
	border-radius: 10px;
	box-shadow: 5px 5px 10px #E5E5E5;
	outline: none;
	&:focus {
		border: 1px solid ${props => props.theme.palete.primary.lighter};
	}
	&:required:focus:invalid{
		color: ${props => props.theme.palete.red};
		border: 1px solid ${props => props.theme.palete.red};
	}
`
export const StyledLabel = styled.label`
	position: absolute;
	top: -1.25rem;
	left: 0;
	font-size: 0.75rem;
	color: ${props => props.theme.palete.primary.main};
	margin-left: 11px;

	transition: 0.2s all ease-in-out;
	${StyledInput}:not(:focus):invalid + & {
		top: 0;
	}
	${StyledInput}:focus + &{
		top: -1.25rem;
	}
	${StyledInput}:valid + &{
		font-style: italic;
	}
	${StyledInput}:required:invalid + &{
		color: ${props => props.theme.palete.red};
	}
`
export const SearchIcon = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 40px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	color: ${props => props.theme.palete.primary.main};
	
	cursor: pointer;
	opacity: 0.8;
	&:hover{
		opacity: 1;
	}
	&:active {
		opacity: 0.9;
	}
`
export const RestoreButton = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 50px;
	height: 100%;
	display: ${props => props.show ? 'flex': 'none'};
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	color: ${props => props.theme.palete.primary.main};

	cursor: pointer;
	opacity: 0.8;
	&:hover{
		opacity: 1;
	}
	&:active {
		opacity: 0.9;
	}
`
export const StyledSearchInput = styled(StyledInput)`
	padding-right: 40px;
	
	&.collapse{
		${({collapse}) => {
			if(collapse) return `
				transition: 0.3 padding ease-in-out;
				padding-left: 0;
				width: 0;
			`
			else return `
				padding-left: 50px;
				width: 100%;
			`
		}}
	}
	

`


