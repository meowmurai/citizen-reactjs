import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalActions, userActions } from '../../../_actions'
import randomID from '../../../_helpers/uuid'

import {
	LoadingButton, Input, Grid, Button, IconButton, TableScroll, Table, TFoot, ThreeDots
} from '../../../_components'

import NiceAvatar from 'react-nice-avatar'



export default function UsersTable(){
	const users = useSelector(state => state.users.items)
	const loading = useSelector(state => state.users.loading)
	const dispatch = useDispatch()


	useEffect(()=>{
		if(!users)
			dispatch(userActions.getChildsUser())
	}, [])

	const handleLock = (username) => {
		dispatch(userActions.setActivate(username, false, () => {
			//dispatch(userActions.getChildsUser())
			let newUsers = users.map(user => user.username !== username ? user : {...user, active: false})
			dispatch(userActions.update(newUsers))
		}))
	}
	const handleUnlock = (username) => {
		dispatch(userActions.setActivate(username, true, () => {
			//dispatch(userActions.getChildsUser())
			let newUsers = users.map(user => user.username !== username ? user : {...user, active: true})
			dispatch(userActions.update(newUsers))
		}))
	}
	const handleSchedule = (username) => {
		dispatch(modalActions.addSchedule(username))
	}
	const HandleDelete = (username) => {
		if(window.confirm(`you can just lock this user. Do you still want delete ${username}?`)){
			dispatch(userActions.del(username, () => {
				//dispatch(userActions.getChildsUser())
				let newUsers = users.filter(user => user.username !== username)
				dispatch(userActions.update(newUsers))
			}))
		}
	}
	return (
		<div style={{position: 'relative'}}>
			<TableScroll>
				<Table className='align-center'>
					<thead>
						<tr>
						    <th style={{width: '5rem'}}></th>
						    <th style={{textAlign: 'left'}}>Username</th>
						    <th style={{textAlign: 'left'}}>Email</th>
						    <th style={{width: '7rem'}}>Manages</th>
						    <th style={{width: '7rem'}}>Role</th>
						    <th style={{width: '7rem'}}>Status</th>
						    <th style={{width: '7rem'}}>Actions</th>
						</tr>
					</thead>
					<tbody>
						{users?.slice().map(user =>{
							return (
								<tr key={randomID()}>
									<td style={{textAlign: 'unset'}}>
										<NiceAvatar style={{ width: '2.5rem', height: '2.5rem' }} {...user.avtConfig} />
									</td>
									<td style={{textAlign: 'left'}}>{user.username}</td>
									<td style={{textAlign: 'left'}}>{user.email}</td>
									<td>{user.manage_location}</td>
									<td>{user.role}</td>
									<td>{user.active ? <span style={{color: 'green'}}>active</span> : 
														<span style={{color: 'gray'}}>not active</span>}
									</td>
									<td>
										<span style={{'whiteSpace': 'nowrap'}}>
											{user.active ? 
												<IconButton onClick={()=>handleLock(user.username)}><i className="fas fa-lock"></i></IconButton>
												:
												<IconButton onClick={()=>handleUnlock(user.username)}><i className="fas fa-lock-open"></i></IconButton>
											}
											<IconButton onClick={()=>handleSchedule(user.username)}><i className="fas fa-calendar-plus"></i></IconButton>
											<IconButton onClick={()=>HandleDelete(user.username)}><i className="far fa-trash-alt"></i></IconButton>
										</span>
									</td>
								</tr>
								)
							})
						}
					</tbody>
				</Table>
				<TFoot>
					<ThreeDots show={loading}/>
				</TFoot>
			</TableScroll>
		</div>
	)
}