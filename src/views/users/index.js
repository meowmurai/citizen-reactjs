import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userActions, modalActions } from '../../_actions'
import NiceAvatar, { genConfig } from 'react-nice-avatar'
import {
	Grid, LoadingButton, Button, IconButton, Input, Search, Card, CardHeader, CardTitle, CardContent
} from '../../_components'

import UsersTable from '../_sections/usersTable'


import { 
	Container,
	Title,
	RowLayout,
} from '../_shareComponents'


export default function Users(){
	const [searchPattern, setSearchPattern] = useState('')
	const dispatch = useDispatch()

	const avtConfig = genConfig()

	const handleEnter = (e) =>{
		if(e.key === 'Enter'){
			console.log(e.target.value)
		}
	}
	/**
	 * 
	 */
	const handleAdd = ()=>{
		dispatch(modalActions.addUser())
	}
	return (
		<>
			<Container>
				<Title>Users</Title>
				<RowLayout>
					<Card>
						<CardHeader >
							<CardTitle style={{lineHeight: '100%', padding: "4px 0",flex: '1 1 0px'}}>
								Users Management
							</CardTitle>
							
							<Search 
								className={searchPattern === '' ? 'collapse' : ''} 
								onKeyDown={handleEnter} 
								onChange={(e)=>setSearchPattern(e.target.value)} 
								placeholder='type to search'
								containerSX={{marginRight: '1rem'}}
							/>
							<Button variant='contained' onClick={handleAdd}>
								<i className="fal fa-plus"></i>
								<span> add</span>
							</Button>
						</CardHeader>
						<CardContent>
							<UsersTable/>
						</CardContent>
						
					</Card>
				</RowLayout>
			</Container>
		</>
	)
}