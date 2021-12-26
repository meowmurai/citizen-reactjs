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
	RowLayout,
} from '../_shareComponents'


export default function Locations(){
	const data = useSelector(state => state.tasks.status.data)
	const [searchPattern, setSearchPattern] = useState('')
	const [canFinish, setFinish] = useState(false)
	const [checkedList, setCheckedList] = useState([])
	const dispatch = useDispatch()

	useEffect(()=>{
		if(data){
			let all_finish = data?.child_users?.every(user => user.is_finish)
			if(all_finish !== canFinish)
				setFinish(all_finish)
		}
		
	}, [data])
	/**trigger when user enter on search field */
	const handleEnter = (e) =>{
		if(e.key === 'Enter'){
			console.log(e.target.value)
		}
	}
	const handleFinish = () => {

	}
	/**trigger when user click add button, show add modal form */
	const handleAdd = ()=>{
		dispatch(modalActions.addLocation())
	}
	const handleVisuallize = () => {
		console.log(checkedList)
	}
	return (
		<Container>
			<Title>Locations</Title>
			<RowLayout>
				<Grid sm={12} md={8} lg={8} style={{padding: '0 8px 8px 0'}}>
					<Card>
						<CardHeader >
							<CardTitle style={{lineHeight: '100%', padding: "4px 0",flex: '1 1 0px'}}>Location Management</CardTitle>
							
							<Search 
								className={searchPattern === '' ? 'collapse' : ''} 
								onKeyDown={handleEnter} 
								onChange={(e)=>setSearchPattern(e.target.value)} 
								placeholder='type to search'
								containerSX={{marginRight: '1rem'}}
							/>
							<Button variant='contained' onClick={handleVisuallize} style={{marginRight: '0.5rem'}}>
								<i className="fas fa-chart-pie"></i>
								<span> Visuallize</span>
							</Button>
							<Button variant='contained' onClick={handleAdd}>
								<i className="fal fa-plus"></i>
								<span> add</span>
							</Button>
						</CardHeader>
						<CardContent>
							<LocationsTable checkedList={checkedList} setCheckedList={setCheckedList}/>
						</CardContent>
					</Card>
				</Grid>
				<Grid sm={12} md={4} lg={4}>
					<Card>
						<CardHeader>
							<CardTitle>Tasks status</CardTitle>
							{!canFinish ?
								<Button 
									variant='contained' 
									onClick={handleFinish}
									style={{marginLeft: 'auto'}}>
									<span> Finish</span>
								</Button>
								:
								<></>
							}
						</CardHeader>
						<CardContent>
							<StatusTable/>
						</CardContent>
					</Card>
				</Grid>
			</RowLayout>
		</Container>
	)
}