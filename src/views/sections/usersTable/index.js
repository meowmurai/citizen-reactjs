import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../../_actions'

import {LoadingButton} from '../../../components/buttons'
import {Input} from '../../../components/inputs'

import NiceAvatar, { genConfig } from 'react-nice-avatar'
import { Grid } from '../../../components/containers'
import { Button } from '../../../components/buttons'
import { ModalForm, Row } from '../../../components/form'
import { Overlay } from '../../../components/overlay'

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
		password: ''
	})
	const users = useSelector(state => state.users.items)
	const dispatch = useDispatch()
	const avtConfig = genConfig()

	console.log(avtConfig)

	useEffect(()=>{
		if(!users)
			dispatch(userActions.getChilds())
	}, [])

	const handleChange = (e) =>{
		setAddForm({...addForm, [e.target.name]: e.target.value})
	}
	const handleSubmit = async () =>{
		setLoading(true)

	}
	const HandleRemove = (username) => {
		console.log('remove ', username)
	}
	const HandleAdd = (code) => {
		setShowForm(true)
		setDefaultUsername(code)

	}
	return (
		<div style={{position: 'relative'}}>
		<Overlay show={showForm} onClick={()=>setShowForm(!showForm)}/>
		<ModalForm show={showForm} className='appear'>
			<Row>
				<h2>Create Account</h2>
			</Row>
			<Row>
				<Input label='username' name='username' onChange={handleChange} value={defaultUsername} required disabled/>
			</Row>
			<Row>
				<Input label='password' name='password' onChange={handleChange} type='password' required/>
			</Row>
			<Row>
				<LoadingButton loading={loading} variant='contained' onClick={handleSubmit}>Create</LoadingButton>
			</Row>
		</ModalForm>
		<TableScroll>
			<Table>
				<thead>
					<tr>
					    <th></th>
					    <th>LOCATION</th>
					    <th>CODE</th>
					    <th>ACCOUNT</th>
					    <th></th>
					</tr>
				</thead>
				<tbody>
					{users && 
						users.map(user =>{
							return (
								<tr key={user.code}>
									<td><NiceAvatar style={{ width: '2.5rem', height: '2.5rem' }} {...avtConfig} /></td>
								    <td>{user.name}</td>
								    <td>{user.code}</td>
								    <td>{user.username ? user.username : 'not found'}</td>
								    <td>
								    	{user.username ?
								    		<Button variant='contained'
									    			bgColor='red'
									    			style={{padding: '4px 12px'}}
									    			onClick={()=>HandleRemove(user.username)}>
									    			delete
									    	</Button>
									    	:
									    	<Button variant='contained' 
									    			style={{padding: '4px 12px'}}
									    			onClick={()=>HandleAdd(user.code)}>
									    			add
									    	</Button>
								    	}
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