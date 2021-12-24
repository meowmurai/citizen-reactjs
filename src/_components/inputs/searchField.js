import { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {
    InputContainer,
    SearchIcon,
    StyledSearchInput,
	RestoreButton
} from './elements'

export const Search = ({
placeholder, name, 
onChange = ()=>{}, 
onExpand = ()=>{}, 
onCollapse = ()=>{}, 
containerSX, inputSX, ...rest}) => {
	const [collapse, setCollapse] = useState(true)
	const handleExpand = () => {
		setCollapse(false)
		onExpand()
	}
	const handleCollapse = () => {
		setCollapse(true)
		onCollapse()
	}
	return (
		<>
			<InputContainer 
				style={containerSX}>
				<RestoreButton show={!collapse} onClick={handleCollapse}>
					<i className="fas fa-chevron-right"></i>
				</RestoreButton>
				<StyledSearchInput 
					style={inputSX} name={name} 
					onChange={onChange} 
					placeholder={placeholder} 
					collapse={collapse}
					{...rest}/>
				<SearchIcon onClick={handleExpand}>
					<i className="fas fa-search"></i>
				</SearchIcon>
			</InputContainer>
		</>
	)
}