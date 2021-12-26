/*
	a popup modal form appear when user click on schedule button from user managerment page
*/
import {useState, useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux'

import {
	ModalForm, Title, Row, Input, InputDateRange, LoadingButton, Grid, Selector, Toggle, Checkbox
} from '../../_components'
import { userActions } from '../../_actions'


export default function AddSchedule({show, payload, ...rest}){
	const [loading, setLoading] = useState(false)
	const [checked, setChecked] = useState(false)
	const [startDate, setStartDate] = useState(null)
	const [endDate, setEndDate] = useState(null)

	const dispatch = useDispatch()


	const handleCheckboxChange = (e) => {
		setChecked(e.target.checked)
	}
	const handleSubmit = async () =>{
		console.log(startDate)
		setLoading(true)
		dispatch(userActions.addSchedule(payload.username, startDate, endDate, () => {
			setLoading(false)
		}, () => {
			setLoading(false)
		}))
	}

	return (
		<ModalForm show={show} className='appear' width='350px' style={{'z-index': '2'}}>
			<Row>
				<Title>Create schedule</Title>
			</Row>
			<Row style={{'justifyContent': 'center','flex-wrap': 'wrap'}}>
				<InputDateRange startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
			</Row>
			<Row style={{marginRight: 'auto'}}>
					<Checkbox checked={checked} onChange={handleCheckboxChange}>
						alert receiver.
					</Checkbox>
			</Row>
			<Row style={{'justify-content': 'center'}}>
				<LoadingButton loading={loading} variant='contained' onClick={handleSubmit}>Create</LoadingButton>
			</Row>
		</ModalForm>
	)
}
