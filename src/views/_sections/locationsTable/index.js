import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import randomID from '../../../_helpers/uuid'
import { userActions } from '../../../_actions'
import {
	LoadingButton, Input, Grid, Button, IconButton, TableScroll, Table
} from '../../../_components'



export default function LocationsTable(){
	const locations = useSelector(state => state.locations.items)
	const dispatch = useDispatch()


	useEffect(()=>{
		if(!locations)
			dispatch(userActions.getChildsAll())
	}, [])

	return (
		<div style={{position: 'relative'}}>
			<TableScroll>
				<Table>
					<thead>
						<tr>
						    <th></th>
						    <th>Name</th>
						    <th>Code</th>
						    <th>Manager</th>
						    <th style={{width: '7rem'}}>Actions</th>
						</tr>
					</thead>
					<tbody>
						{locations && 
							locations.map(loca =>{
								return (
									<tr key={randomID()}>
										<td><NiceAvatar style={{ width: '2.5rem', height: '2.5rem' }} {...avtConfig} /></td>
									    <td>{loca.name}</td>
									    <td>{loca.code}</td>
									    <td>{loca.username}</td>
									    <td>
									    	<span style={{'white-space': 'nowrap'}}>
									    		{user.active ? 
									    			<IconButton onClick={()=>handleLock(loca.code)}><i className="fas fa-lock"></i></IconButton>
									    			:
									    			<IconButton onClick={()=>handleUnlock(loca.code)}><i className="fas fa-lock-open"></i></IconButton>
									    		}
										    	<IconButton><i className="fas fa-key"></i></IconButton>
										    	<IconButton onClick={()=>HandleDelete(loca.code)}><i className="far fa-trash-alt"></i></IconButton>
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