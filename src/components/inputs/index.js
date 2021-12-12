import styled from 'styled-components'


export const Input = ({label, name, ...rest}) => {

	return (
		<>
			<InputContainer>
				<StyledInput name={name} {...rest} required/>
				<StyledLabel id={name}>
					{label}
				</StyledLabel>
			</InputContainer>
		</>
	)
}
const InputContainer = styled.div`
	display: inline-block;
	position: relative;
	width: 100%;

`

const StyledInput = styled.input`
	width: 100%;
	padding: 10px 8px 8px 8px;
	border: 1px solid #808080;
	border-radius: 10px;
	font-size: 1rem;
	box-shadow: 5px 5px 10px #E5E5E5;
	&:focus {
		outline: none;
		border: 2px solid ${props => props.theme.palete.primary.main};
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
