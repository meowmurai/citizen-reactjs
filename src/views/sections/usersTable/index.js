import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../../_actions'

import {LoadingButton} from '../../../_components/buttons'
import {Input} from '../../../_components/inputs'

import NiceAvatar, { genConfig } from 'react-nice-avatar'
import { Grid } from '../../../_components/containers'
import { Button, IconButton } from '../../../_components/buttons'
import { ModalForm, Row } from '../../../_components/form'

import {
	TableScroll,
	Table
} from './elements'


export default function UsersTable(){
	const users = useSelector(state => state.users.items)
	const dispatch = useDispatch()
	const avtConfig = genConfig()


	useEffect(()=>{
		if(!users)
			dispatch(userActions.getChildsUser())
	}, [])

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