import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import randomID from '../../../_helpers/uuid'
import { modalActions, userActions } from '../../../_actions'
import {
	LoadingButton, Input, Grid, Button, IconButton, TableScroll, Table, TFoot, ThreeDots
} from '../../../_components'



export default function LocationsTable(){
	const locations = useSelector(state => state.locations.items)
	const loading = useSelector(state => state.locations.loading)
	const dispatch = useDispatch()


	useEffect(()=>{
		if(!locations)
			dispatch(userActions.getChildsAll())
	}, [])
	const handleAddUser = (form) =>{
		dispatch(modalActions.addUserToExistLocation(form))
	}
	const handleupdateLocation = (form) => {
		dispatch(modalActions.updateLocation(form))
	}
	return (
		<TableScroll>
			<Table className='align-center'>
				<thead>
					<tr>
						<th style={{width: '3rem'}}>#</th>
						<th style={{textAlign: 'left'}}>Name</th>
						<th style={{width: '5rem'}}>Code</th>
						<th style={{width: '5rem'}}>Manager</th>
						<th style={{width: '7rem'}}>Actions</th>
					</tr>
				</thead>
				<tbody>
					{locations && locations.map((loca, index) =>{
						return (
							<tr key={randomID()}>
								<td>{index}</td>
								<td style={{textAlign: 'left'}}>{loca.name}</td>
								<td>{loca.code}</td>
								<td>{loca.username ? 
										loca.username : 
										<IconButton 
											onClick={() => handleAddUser({name: loca.name, code: loca.code})}>
											<i className="fas fa-user-plus"></i>
										</IconButton>
									}
								</td>
								<td>
									<span style={{'whiteSpace': 'nowrap'}}>
										<IconButton 
											onClick={() => handleupdateLocation({name: loca.name, code: loca.code})}>
											<i className="fas fa-edit"></i>
										</IconButton>
										<IconButton><i className="far fa-trash-alt"></i></IconButton>
									</span>
								</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
			<TFoot>
				<ThreeDots show={loading}/>
			</TFoot>
		</TableScroll>
	)
}