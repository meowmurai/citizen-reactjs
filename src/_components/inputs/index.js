import styled from 'styled-components'
import {BiSearch} from 'react-icons/bi'

export const Input = ({label, name, containerSX, inputSX, ...rest}) => {
	return (
		<>
			<InputContainer style={containerSX}>
				<StyledInput name={name} style={{...inputSX}} {...rest} required/>
				<StyledLabel id={name}>
					{label}
				</StyledLabel>
			</InputContainer>
		</>
	)
}
export const Search = ({placeholder, name, onChange,containerSX, inputSX, ...rest}) => {

	return (
		<>
			<InputContainer style={containerSX}>
				<SearchIcon>
					<BiSearch/>
				</SearchIcon>
				<StyledSearchInput style={inputSX} name={name} onChange={onChange} placeholder={placeholder} {...rest}/>
			</InputContainer>
		</>
	)
}
const InputContainer = styled.div`
	display: inline-block;
	position: relative;
	height: fit-content;
	width: fit-content;
`

const StyledInput = styled.input`
	width: 100%;
	padding: 10px 8px 8px 8px;
	border: 1px solid #808080;
	border-radius: 10px;
	box-shadow: 5px 5px 10px #E5E5E5;
	&:focus {
		outline: none;
		border: 1px solid ${props => props.theme.palete.primary.main};
	}

`

const StyledLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	font-size: 0.75rem;
	color: ${props => props.theme.palete.primary.main};
	margin-left: 11px;

	transition: 0.2s all ease-in-out;

	${StyledInput}:focus + &{
		top: -1.25rem;
	}
	${StyledInput}:valid + &{
		font-style: italic;
	}
`
const SearchIcon = styled.div`
	position: absolute;
	top: 0;
	width: 50px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	color: ${props => props.theme.palete.primary.main};	
`
const StyledSearchInput = styled(StyledInput)`
	padding-left: 50px;
	&.collapse{
		width: 0;
		padding-right: 0;
	}
	${SearchIcon}:hover + &{
		width: 100%;
	}

	&:focus,:hover{
		width: 100%;
	}

`