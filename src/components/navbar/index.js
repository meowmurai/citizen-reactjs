import {useState, useEffect, useRef} from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { userActions } from '../../_actions'

import LoginForm from '../../views/auth/login'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, Empty, AvatarContainer, DropDown, DropDownItem} from './elements'
import {Button, LoadingButton} from '../buttons'
import {Input} from '../inputs'
import {Overlay} from '../overlay'
import {FaBars} from 'react-icons/fa'

import NiceAvatar, { genConfig } from 'react-nice-avatar'

const Navbar = () => {
	//state
	const [isSticky, setIsSticky] = useState(false)
	const [menuToggle, setMenuToggle] = useState(false)
	const [showLogin, setShowLogin] = useState(false)
	const [dropDown, setDropDown] = useState(false)

	const authState = useSelector( state => state.authentication )
	const dispatch = useDispatch()
	const location = useLocation()
	const avtConfig = genConfig()
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
	// reset state on redirect
	useEffect(()=>{
		setMenuToggle(false)
		setShowLogin(false)
		setDropDown(false)
	},[location])


	// event handler
	const avtHandleClick = (e) => {
		e.preventDefault()
		setDropDown(!dropDown)
	}
	const logout = () => {
		dispatch(userActions.logout())
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
								<NavLink to='#' onClick={avtHandleClick}>
									<NiceAvatar style={{ width: '3rem', height: '3rem' }} {...avtConfig} />
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
										onClick={()=>setShowLogin(true)}>
										Login
								</Button>
							</>
						}
					</AvatarContainer>
				</NavbarContainer>
				<NavMenu show={menuToggle}>
					<NavItem><NavLink to='/home'>Home</NavLink></NavItem>
					<NavItem><NavLink to='/about'>About</NavLink></NavItem>
					<NavItem><NavLink to='/contac'>Contact</NavLink></NavItem>
				</NavMenu>
			</Nav>
			<Overlay show={showLogin} onClick={()=>setShowLogin(false)}/>
			<LoginForm showLogin={showLogin}/>
		</>
	)
}

export default Navbar
