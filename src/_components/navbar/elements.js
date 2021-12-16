import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {OuterContainer, Grid} from '../containers'

export const Nav = styled.nav`
	width: 100%;
	position: sticky;
	top: -1px;
	background: ${props => props.theme.palete.primary.main};
	display: flex;
	flex-direction: column;
	justify-content: flex;
	font-size: 1rem;
	color: ${props => props.theme.palete.secondary.main};
	z-index: 1;
	@media screen and (max-width: 768px){
		border-bottom: 1px solid #8f8f8f;
	}
`

export const NavbarContainer = styled(OuterContainer)`
	height: 80px;
	width: 100%;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: 0.3s all ease-in-out;
	@media screen and (min-width: 768px){
		${props => props.show ? ``: `
			position: absolute;
			top: -100px;
		`}
	}
	
`

export const NavLogo = styled.div`
	color: inherit;
	display: flex;
	justify-self: flex-start;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.8rem;
	font-weight: 700;
	@media screen and (max-width: 768px){
		justify-self: flex-start;
		margin: 0;
	}
`

export const MobileIcon = styled.div`
	display: none;
	margin-right: 16px;
	@media screen and (max-width: 768px){
		height: 100%;
		text-align: center;
		display: flex;
		align-items: center;
		font-size: 1.8rem;
		cursor: pointer;
	}
`

export const NavMenu = styled.div`
	background-color: #121029;
	display: flex;
	justify-content: center;
	align-items:center;
	padding: 0;
	list-style: none;
	
	@media screen and (max-width: 768px){
		display: ${props => props.show ? "flex": "none"};
		z-index: 10;
		position: absolute;
		top: 80px;
		left: 0;
		margin: 0;
		flex-direction: column;
		width: 100%;
	}
`

export const NavItem = styled.div`
	position: relative;
	padding: 16px 24px;
	border-bottom: 3px solid transparent;
	text-align: center;
	@media screen and (min-width: 768px){
		&:active, :hover{
			border-bottom: 3px solid ${props=>props.theme.palete.secondary.main};
		}
	}
	
	@media screen and (max-width: 768px){
		width: 100%;
		&:hover:after{
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: #000;
			opacity: 0.2;
			pointer-events: none;
		}
	}
`
export const NavLink = styled(Link)`
	width: 100%;
	height: 100%;
	text-decoration: none;
	color: inherit;
	&:focus{
		transition: all 0.2s ease-in-out;
	}
`
export const Empty = styled.div`
	width: 100%;
	height: 150px;
	@media screen and (max-width: 768px){
		height: 80px;
	}
`

export const AvatarContainer = styled.div`
	position: relative;
	display: flex;
`
export const DropDown = styled.div`
	display: ${props => props.show ? 'inline-block' : 'none'};
	position: absolute;
	top: 60px;
	border-radius: 5px;
	background-color: #fff;
	color: #000;
	transform: translate(-10%,0);
	z-index: 1;
	&:before{
		content: '';
		width: 50%;
		height: 50%;
		top: -10px;
		left: 50%;
		z-index: -1;
		transform: rotate(45deg);
  		transform-origin: top left;

		background-color: #fff;
		position: absolute;
		
	}

`
export const DropDownItem = styled.div`
	width: 100%;
	display: inline-block;
	padding: 4px 8px;
	text-align: center;
	border-bottom: 1px solid #8f8f8f;
	font-size: 0.9rem;
`