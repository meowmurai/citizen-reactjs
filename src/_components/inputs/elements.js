import styled from 'styled-components'

export const InputContainer = styled.div`
	display: inline-block;
	position: relative;

	transition: 0.3s all ease-in-out;
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
	width: 50px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	color: ${props => props.theme.palete.primary.main};

	cursor: pointer;

`
export const StyledSearchInput = styled(StyledInput)`
	padding-left: 50px;
	&.collapse{
		width: 0;
		padding-right: 0;
	}
	${SearchIcon}:hover + &{
		width: 100%;
		padding-right: 8px;
	}

	&:focus,:hover{
		width: 100%;
		padding-right: 8px;
	}

`


