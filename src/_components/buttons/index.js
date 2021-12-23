import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


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

const ChildWrapper = styled.span`
	display: inline-block;
	white-space: nowrap;
`
const StyledButton = styled.button`
	all: unset;
	cursor: pointer;
	position: relative;
	display: inline-block;
	min-width: 20px;
	height: 1.5rem;
	text-align: center;
	border-radius: 10px;
	padding: 8px 24px;
	border: 0px;
	overflow: hidden;
	box-shadow: 5px 5px 10px #E5E5E5;
	transition: 0.3s all ease-in-out;
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
	&:hover:after{
		opacity: 0.4;
	}
	&:active:after{
		background-color: #454545;
		opacity: 0.2;
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
		padding: 8px 12px;
	}
`	
const ContainedButton = styled(StyledButton)`
	
`		
const OutlinedButton = styled(StyledButton)`
	background-color: transparent;
	border: 2px solid;
	
`	
const TextButton = styled(StyledButton)`
	background-color: transparent;
	box-shadow: none;
	
`		
export const IconButton = styled(StyledButton)`
	background-color: transparent;
	padding: 2px 4px;
	border: none;
	border-radius: 50%;
	box-shadow: none;
	color: ${props => props.color ? props.color : '#454545'};
	opacity: 0.6;

	&:hover{
		opacity: 1;
	}
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

