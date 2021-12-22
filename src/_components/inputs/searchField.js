import { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {
    InputContainer,
    SearchIcon,
    StyledSearchInput
} from './elements'

export const Search = ({placeholder, name, onChange,containerSX, inputSX, ...rest}) => {
	return (
		<>
			<InputContainer 
				style={containerSX}>
				<SearchIcon>
					<BiSearch/>
				</SearchIcon>
				<StyledSearchInput 
					style={inputSX} name={name} 
					onChange={onChange} 
					placeholder={placeholder} 
					{...rest}/>
			</InputContainer>
		</>
	)
}