import { useState } from 'react'
import {
	InputContainer,
	StyledInput,
	StyledLabel
} from './elements'
export * from './searchField'
export * from './datePicker'

export const Input = ({label, name, value, onChange, containerSX, inputSX, ...rest}) => {

	return (
		<>
			<InputContainer style={containerSX}>
				<StyledInput value={value} name={name} onChange={onChange} style={{...inputSX}} {...rest} required/>
				<StyledLabel id={name}>
					{label}
				</StyledLabel>
			</InputContainer>
		</>
	)
}
