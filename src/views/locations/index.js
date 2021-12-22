import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions, modalActions } from '../../_actions'

import NiceAvatar, { genConfig } from 'react-nice-avatar'

import {
	Grid, LoadingButton, Button, IconButton, Input, Search, Card, CardHeader
} from '../../_components'

import UsersTable from '../_sections/usersTable'


import { 
	Container,
	Title,
	Row,
} from './elements'


export default function Locations(){
	const [searchPattern, setSearchPattern] = useState('')
	const dispatch = useDispatch()

	const avtConfig = genConfig()

	const handleEnter = (e) =>{
		if(e.key === 'Enter'){
			console.log(e.target.value)
		}
	}
	const handleAdd = ()=>{
		dispatch(modalActions.addUser())
	}
	return (
		<>
			<Container>
				<Title>Locations</Title>
				<Row>
					<Card>
						<CardHeader >
							<Grid sm={5} md={7} lg={8}>
								{/*<h4 style={{margin: '0'}}>User Management</h4>*/}
								<span>Location Management</span>
								
							</Grid>
							<Grid container sm={8} md={7} lg={6} justifyContent="flex-end" wrap='nowrap'>
								<Search 
									className={searchPattern === '' ? 'collapse' : ''} 
									onKeyDown={handleEnter} 
									onChange={(e)=>setSearchPattern(e.target.value)} 
									placeholder='type to search'
								/>
								<div style={{flex: '0 0 1rem'}}/>
								<Button variant='contained' onClick={handleAdd}>
									<i className="fal fa-plus"></i>
									<span> add</span>
								</Button>
							</Grid>
						</CardHeader>
						<UsersTable/>
					</Card>
				</Row>
			</Container>
		</>
	)
}