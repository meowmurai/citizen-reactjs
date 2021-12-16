import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../../_actions'

import {LoadingButton} from '../../../_components/buttons'
import {Input} from '../../../_components/inputs'
import { Toggle } from '../../../_components/toggle'

import NiceAvatar, { genConfig } from 'react-nice-avatar'
import { Grid } from '../../../_components/containers'
import { Button, IconButton } from '../../../_components/buttons'
import { ModalForm, Row } from '../../../_components/form'
import { Overlay } from '../../../_components/overlay'

import {
	TableScroll,
	Table
} from './elements'


export default function UsersTable(){
	const [showForm, setShowForm] = useState(false)
	const [loading, setLoading] = useState(false)
	const [defaultUsername, setDefaultUsername] = useState('')
	const [addForm, setAddForm] = useState({
		username: '',
		email: '',
		password: ''
	})
	const users = useSelector(state => state.users.items)
	const dispatch = useDispatch()
	const avtConfig = genConfig()

	console.log(avtConfig)

	useEffect(()=>{
		if(!users)
			dispatch(userActions.getChildsUser())
	}, [])

	const handleChange = (e) =>{
		setAddForm({...addForm, [e.target.name]: e.target.value})
	}
	const handleSubmit = async () =>{
		setLoading(true)

	}
	const handleLock = (username) => {
		
	}
	const handleUnlock = (username) => {
		
	}
	const HandleDelete = (username) => {
		if(window.confirm(`you can just lock this user. Do you still want delete ${username}?`)){
			
		}
	}
	return (
		<div style={{position: 'relative'}}>
		<Overlay show={showForm} onClick={()=>setShowForm(!showForm)} style={{'z-index': '2'}}/>
		<ModalForm show={showForm} className='appear' width='400px' style={{'z-index': '2'}}>
			<Row style={{'flex-direction': 'column'}}>
				<h2 style={{margin: '0', 'text-align': 'center'}}>Create account</h2>
			</Row>
			<Row style={{'justify-content': 'space-between', 'flex-wrap': 'wrap', 'margin': '10px 15px'}}>
				<span>for</span>
				<Toggle ></Toggle>
				<div style={{width: '100%'}}/>
				<span style={{'display': 'block'}}>
					username: 
				</span>
				<span>{defaultUsername}</span>
			</Row>
			<Row>
				<Input label='email' name='email' onChange={handleChange} required/>
			</Row>
			<Row>
				<Input label='password' name='password' onChange={handleChange} type='password' required/>
			</Row>
			<Row style={{'justify-content': 'center'}}>
				<LoadingButton loading={loading} variant='contained' onClick={handleSubmit}>Create</LoadingButton>
			</Row>
		</ModalForm>
		<TableScroll>
			<Table>
				<thead>
					<tr>
					    <th></th>
					    <th>Username</th>
					    <th>Email</th>
					    <th>Manages</th>
					    <th>Role</th>
					    <th>Status</th>
					    <th style={{width: '7rem'}}>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users && 
						users.slice(1).map(user =>{
							return (
								<tr key={user.username}>
									<td><NiceAvatar style={{ width: '2.5rem', height: '2.5rem' }} {...avtConfig} /></td>
								    <td>{user.username}</td>
								    <td>{user.email}</td>
								    <td>{user.manage_location}</td>
								    <td>{user.role}</td>
								    <td>{user.active ? <span style={{color: 'green'}}>active</span> : 
								    					<span style={{color: 'red'}}>blocked</span>}
								    </td>
								    <td>
								    	<span style={{'white-space': 'nowrap'}}>
								    		{user.active ? 
								    			<IconButton onClick={()=>handleLock(user.username)}><i className="fas fa-lock"></i></IconButton>
								    			:
								    			<IconButton onClick={()=>handleUnlock(user.username)}><i className="fas fa-lock-open"></i></IconButton>
								    		}
									    	<IconButton><i className="fas fa-key"></i></IconButton>
									    	<IconButton onClick={()=>HandleDelete(user.username)}><i className="far fa-trash-alt"></i></IconButton>
									    </span>
								    </td>
								</tr>
							)
						})
					}
				</tbody>
			</Table>
		</TableScroll>
		</div>
	)
}