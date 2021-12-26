import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions, modalActions } from '../../_actions'
import {
	Grid, LoadingButton, Button, IconButton, Input, Search, Card, CardHeader, CardContent, CardTitle
} from '../../_components'

import LocationsTable from '../_sections/locationsTable'
import StatusTable from '../_sections/statusTable'


import { 
	Container,
	Title,
	Row,
} from './elements'


export default function Locations(){
	const [searchPattern, setSearchPattern] = useState('')
	const dispatch = useDispatch()

	const handleEnter = (e) =>{
		if(e.key === 'Enter'){
			console.log(e.target.value)
		}
	}
	const handleAdd = ()=>{
		dispatch(modalActions.addLocation())
	}
	return (
		<Container>
			<Title>Locations</Title>
			<Row>
				<Grid sm={12} md={8} lg={8}>
					<Card>
						<CardHeader >
							<CardTitle style={{lineHeight: '100%', padding: "4px 0",flex: '1 1 0px'}}>Location Management</CardTitle>
							
							<Search 
								className={searchPattern === '' ? 'collapse' : ''} 
								onKeyDown={handleEnter} 
								onChange={(e)=>setSearchPattern(e.target.value)} 
								placeholder='type to search'
							/>
							<div style={{flex: '0 1 1rem'}}/>
							<Button variant='contained' onClick={handleAdd}>
								<i className="fal fa-plus"></i>
								<span> add</span>
							</Button>
						</CardHeader>
						<CardContent>
							<LocationsTable/>
						</CardContent>
					</Card>
				</Grid>
				<Grid sm={12} md={4} lg={4}>
					{/* <Card>
						<CardHeader>
							<CardTitle>Tasks status</CardTitle>
						</CardHeader>
						<CardContent>
							<StatusTable/>
						</CardContent>
					</Card> */}
				</Grid>
			</Row>
		</Container>
	)
}