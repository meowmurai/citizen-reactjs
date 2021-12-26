import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import randomID from '../../../_helpers/uuid'
import { modalActions, taskActions } from '../../../_actions'
import {
	LoadingButton, Input, Grid, Button, IconButton, TableScroll, Table, TFoot, ThreeDots
} from '../../../_components'



export default function SurveysTable({show}){
	const surveys = useSelector(state => state.tasks.survey.data)
	const loading = useSelector(state => state.tasks.survey.loading)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(taskActions.getSurveys())
	}, [])

	const handleDelete = (identity_number) => {
		if(window.confirm(`Do you still want delete }?`)){
			dispatch(taskActions.deleteOneRow(identity_number), () => {
				dispatch(taskActions.getSurveys())
			})
		}
	}
	return (
		<div style={{display: `${show ? 'unset' : 'none'}`, minWidth: '80%'}}>
			<h2 style={{textAlign: 'center', marginBottom: '16px'}}>Database</h2>
			<TableScroll>
				<Table className='align-center'>
					<thead>
						<tr>
							<th style={{width: '3rem'}}>#</th>
							<th style={{textAlign: 'left'}}>Full name</th>
							<th style={{width: '8rem'}}>Date of birth</th>
							<th style={{width: '10rem'}}>ID</th>
							<th style={{width: '7rem'}}>Actions</th>
						</tr>
					</thead>
					<tbody>
						{surveys?.map((survey, index) =>{
							return (
								<tr key={randomID()}>
									<td>{index}</td>
									<td style={{textAlign: 'left'}}>{survey.fullname}</td>
									<td>{survey.dob}</td>
									<td>{survey.identity_number}</td>
									<td>
										<IconButton onClick={()=>handleDelete(survey.identity_number)}><i className="far fa-trash-alt"></i></IconButton>
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
		</div>
	)
}