import {useState, useEffect, useRef} from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { userActions, modalActions } from '../../_actions'

import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, Empty, AvatarContainer, DropDown, DropDownItem} from './elements'
import {Button, LoadingButton} from '../buttons'
import {Input, Search} from '../inputs'
import {FaBars} from 'react-icons/fa'

import NiceAvatar from 'react-nice-avatar'

const Navbar = () => {
	//state
	const [isSticky, setIsSticky] = useState(false)
	const [menuToggle, setMenuToggle] = useState(false)
	const [dropDown, setDropDown] = useState(false)

	const authState = useSelector( state => state.authentication )
	const dispatch = useDispatch()
	const ref = useRef()

	// handle scroll event
	useEffect(()=>{
		const cachedRef = ref.current
        const observer = new IntersectionObserver(
        	([e]) => setIsSticky(e.intersectionRatio < 1),
        	{threshold: [1]}
        )

		observer.observe(cachedRef)

		// unmount
		return function(){
		  observer.unobserve(cachedRef)
		}
	}, [])


	// event handler
	const avtHandleClick = (e) => {
		e.preventDefault()
		setDropDown(!dropDown)
	}
	const logout = () => {
		dispatch(userActions.logout())
	}
	const handleSearchKey = (e) =>{
		if(e.key === 'Enter'){
			
		}
	}
	const showLoginForm = () => {
		dispatch(modalActions.login())
	}
	return (
		<>
			<Nav ref={ref}>
				<NavbarContainer show={!isSticky}>
					<NavLogo>
						<MobileIcon onClick={()=>setMenuToggle(!menuToggle)}>
							<FaBars />
						</MobileIcon>
						<NavLink to='/'>
							Citizen
						</NavLink>
					</NavLogo>
					<Search 
						className='collapse' onKeyDown={handleSearchKey}
						placeholder='type to search' 
						containerSX={{'flex-basis': '50%'}} 
						inputSX={{'box-shadow': 'none'}}
					/>
					<AvatarContainer>
						{ authState.user && !authState.loading ?
							<>
								<NavLink to='#' onClick={avtHandleClick}>
									<NiceAvatar style={{ width: '3rem', height: '3rem' }} {...authState.user.avtConfig} />
								</NavLink>
								<DropDown show={dropDown}>
									<DropDownItem><NavLink to='#' style={{margin: '0 auto'}}>setting</NavLink></DropDownItem>
									<DropDownItem><NavLink to='/' onClick={logout}>Logout</NavLink></DropDownItem>
								</DropDown>
							</>
							:
							<>
								<Button variant='contained' bgcolor='secondary' color='primary'
										sx={{ boxShadow: 'none'}}
										onClick={showLoginForm}>
										Login
								</Button>
							</>
						}
					</AvatarContainer>
				</NavbarContainer>
				<NavMenu show={menuToggle}>
					<NavItem><NavLink to='/home/users'>Manage users</NavLink></NavItem>
					<NavItem><NavLink to='/account'>Account</NavLink></NavItem>
				</NavMenu>
			</Nav>
		</>
	)
}

export default Navbar
