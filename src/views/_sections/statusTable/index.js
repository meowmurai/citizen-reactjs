import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { taskActions } from '../../../_actions'
import randomID from '../../../_helpers/uuid'

import {
	LoadingButton, Input, Grid, Button, IconButton, TableScroll, Table, TFoot, ThreeDots
} from '../../../_components'


export default function StatusTable(){
	const data = useSelector(state => state.tasks.status.data)
	const loading = useSelector(state => state.tasks.status.loading)
	const dispatch = useDispatch()


	useEffect(()=>{
		console.log(data)
		if(!data)
			dispatch(taskActions.getTaskStatus())
	}, [])

	return (
		<TableScroll>
			<Table className='align-center' noBorder>
				<thead>
					<tr>
						<th style={{width: '3rem'}}>Name</th>
						<th>Closing day</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{data && data.child_users.map( child => {
						return (
							<tr key={randomID()}>
								<td>{child.username}</td>
								<td>{child.survey_time ? new Date(child.survey_time.end_time): ''}</td>
								<td>
									{child.is_finish ? 
										<span style={{color: 'green'}}>finished</span> :
										<span style={{color: 'gray'}}>in progress</span>
									}
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