import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import randomID from '../../../_helpers/uuid'
import { modalActions, locationActions } from '../../../_actions'
import {
	LoadingButton, Input, Grid, Button, IconButton, TableScroll, Table, TFoot, ThreeDots, Checkbox
} from '../../../_components'



export default function LocationsTable({checkedList, setCheckedList}){
	const locations = useSelector(state => state.locations.items)
	const loading = useSelector(state => state.locations.loading)
	const [locaChecked, setLocaChecked] = useState([])
	const dispatch = useDispatch()


	useEffect(()=>{
		if(!locations)
			dispatch(locationActions.getChildsLocation())
	}, [])
	const handleAddUser = (form) =>{
		dispatch(modalActions.addUserToExistLocation(form))
	}
	const handleupdateLocation = (form) => {
		dispatch(modalActions.updateLocation(form))
	}
	const handleCheck = (e) => {
		if(e.target.checked){
			setCheckedList( prev => ([...prev, e.target.value]))
		}else{
			setCheckedList( prev => (prev.filter(code => (code !== e.target.value))))
		}
	}
	return (
		<TableScroll>
			<Table className='align-center'>
				<thead>
					<tr>
						<th style={{width: '1.5rem'}}>

						</th>
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
								<td><input type='checkbox' checked={checkedList.includes(loca.code)} value={loca.code} onChange={handleCheck}/></td>
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