import {useState, useEffect, useRef} from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { userActions, modalActions } from '../../_actions'

import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, Empty, AvatarContainer, DropDown, DropDownItem} from './elements'
import { Grid, Button, LoadingButton, Input, Search } from '../index'
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
					<AvatarContainer>
						{ authState.user && !authState.loading ?
							<>
								<Grid container flexDirection="column">
									<span style={{marginRight: '8px'}}>{authState.user.username}</span>	
									{authState.user.active ? 
										<span style={{color: 'green', fontSize: '0.75rem'}}>active</span> : 
										<span style={{color: 'gray',fontWeight: 'bold', fontSize: '0.75rem'}}>not active</span>
									}
								</Grid>
								
								<NavLink to='#' onClick={avtHandleClick} style={{marginRight: '8px'}}>
									<NiceAvatar style={{ width: '3rem', height: '3rem' }} {...authState.user.avtConfig} />
								</NavLink>
								{/* <DropDown show={dropDown}>
									<DropDownItem><NavLink to='#' >setting</NavLink></DropDownItem>
									<DropDownItem><NavLink to='/' onClick={logout}>Logout</NavLink></DropDownItem>
								</DropDown> */}
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
					<NavItem><NavLink to='/home/users'>Users</NavLink></NavItem>
					<NavItem><NavLink to='/home/locations'>Locations</NavLink></NavItem>
					<NavItem><NavLink to='/home/analytics'>Analytics</NavLink></NavItem>
					<NavItem><NavLink to='/account'>Account</NavLink></NavItem>
					{['B1','B2'].includes(authState?.user?.role) ? <NavItem><NavLink to='/home/survey'>Survey</NavLink></NavItem> : <></>}
					{authState?.user ? <NavItem><NavLink to='/' onClick={logout}>Logout</NavLink></NavItem> : <></>}
				</NavMenu>
			</Nav>
		</>
	)
}

export default Navbar
