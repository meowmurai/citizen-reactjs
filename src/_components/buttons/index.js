import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ChildWrapper = styled.span`
	display: inline-block;
	white-space: nowrap;
`
const StyledButton = styled.button`
	all: unset;
	cursor: pointer;
	position: relative;
	display: inline-block;
	border-radius: 10px;
	padding: 8px 24px;
	border: 0px;
	box-shadow: 5px 5px 10px #E5E5E5;
	background-color: ${props => props.bgcolor === 'secondary' ? props.theme.palete.secondary.main :
															   props.theme.palete.primary.main};
	color: 				${props => props.color === 'primary' ? props.theme.palete.primary.main :
								 							   props.theme.palete.secondary.main};
	&:after{
		content: '';
		width: 100%;
		height: 100%;
		background-color: #000;
		opacity: 0;
		position : absolute;
		top: 0;
		left: 0;
		
	}
	${props => props.disabled ? `
		pointer-events: none;
		&:after{
			background-color: #fff;
			opacity: 0.5;
		}
	` : ''};
	${props => ({...props.sx})};
	@media screen and (max-width: 768px){
		i + span{
			display: none;
		}
	}
	@media screen and (max-width: 1024px){
		padding: 4px 12px;
	}
`	
const ContainedButton = styled(StyledButton)`
	&:hover:after{
		opacity: 0.3;
		transition: 0.3s all ease-in-out;
	}
`		
const OutlinedButton = styled(StyledButton)`
	background-color: transparent;
	border: 2px solid;
	&:hover:after{
		opacity: 0.3;
		transition: 0.3s all ease-in-out;
	}
`	
const TextButton = styled(StyledButton)`
	background-color: transparent;
	box-shadow: none;
	&:hover:after{
		opacity: 0.3;
		transition: 0.3s all ease-in-out;
	}
`		
export const IconButton = styled(StyledButton)`
	background-color: transparent;
	padding: 2px 4px;
	border: none;
	box-shadow: none;
	color: ${props => props.color ? props.color : '#8f8f8f'}
`
export const LoadingButton = ({variant, loading, children, ...rest}) => {
	return (
		<>
			{variant === 'contained' ? 	<ContainedButton {...rest} disabled={loading}>
											{children }
											{loading ? <i className="fa-spin fas fa-circle-notch" style={{'margin-left': '4px'}}/>: ''}
										</ContainedButton> : 
			 variant === 'outlined' ? 	<OutlinedButton {...rest}>
			 								{children}
											{loading ? <i className="fa-spin fas fa-circle-notch" style={{'margin-left': '4px'}}/>: ''}
			 							</OutlinedButton> :
			 							<TextButton {...rest}>
			 								{children}
											{loading ? <i className="fa-spin fas fa-circle-notch" style={{'margin-left': '4px'}}/>: ''}
			 							</TextButton> 
			}
		</>
	)
}
export const Button = ({variant, children, ...rest}) => {
	return (
		<>
			{variant === 'contained' ? 	<ContainedButton {...rest}><ChildWrapper>{children}</ChildWrapper></ContainedButton> : 
			 variant === 'outlined' ? 	<OutlinedButton {...rest}><ChildWrapper>{children}</ChildWrapper></OutlinedButton> :
			 							<TextButton {...rest}><ChildWrapper>{children}</ChildWrapper></TextButton> 
			}
		</>
	)
}
