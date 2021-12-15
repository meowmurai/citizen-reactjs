import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../_actions'

import NiceAvatar, { genConfig } from 'react-nice-avatar'

import { Grid } from '../../_components/containers'
import {LoadingButton} from '../../_components/buttons'
import { Button, IconButton } from '../../_components/buttons'
import {Input, Search} from '../../_components/inputs'
import { Card, CardHeader } from '../../_components/card'

import UsersTable from '../sections/usersTable'

import { 
	Container,
	Title,
	Row,
} from './elements'


export default function Users(){
	const dispatch = useDispatch()

	const handleEnter = (e) =>{
		if(e.key === 'Enter'){
			console.log(e.target.value)
		}
	}
	const handleAdd = ()=>{
		alert('abc')
	}
	return (
		<>
			<Container>
				<Title>Users</Title>
				<Row>
					<Card>
						<CardHeader >
							<Grid sm={5} md={7} lg={8}>
								{/*<h4 style={{margin: '0'}}>User Management</h4>*/}
								<span>User Management</span>
								
							</Grid>
							<Grid container sm={8} md={7} lg={6} justifyContent="flex-end" wrap='nowrap'>
								<Search className='collapse' onKeyDown={handleEnter} placeholder='type to search' />
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