import {useState, useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux'

import {
	ModalForm, Title, Row, Input, InputDate, LoadingButton, Grid, Selector, Toggle
} from '../../_components'
import { modalActions, userActions, locationActions } from '../../_actions'


export default function AddLocationForm({show, payload, ...rest}){
	const loading = useSelector(state => state.createUser.loading)
	const role = useSelector(state => state.authentication.user.role)

	const [form, setForm] = useState({
		name: `${payload ? payload.name : ''}`,
		code: `${payload ? payload.code : ''}`
	})
	const dispatch = useDispatch()

	const handleChange = (e) =>{
		setForm({...form, [e.target.name]: e.target.value})
	}
	const handleSubmit = async () =>{
		dispatch(locationActions.create(form))
	}

	return (
		<ModalForm show={show} className='appear' width='300px' style={{'z-index': '2'}}>
			<Row>
				<Title>
					{payload && payload.isUpdate ? `Assign ` : 'Create new '} 
					{role == "A1"? 'City': role == 'A2'? 'province' : role == 'A3'? 'District': role == 'B1'? 'Sub-district' : 'N/A'}
					{payload && payload.isUpdate ? `'s code` : ''} 
				</Title>
			</Row>
			<Row style={{'justifyContent': 'center','flexWrap': 'wrap'}}>
                <Row>
                    <Input 
						value={form.name} label='name' name='name' 
						onChange={handleChange} type='text' 
						disabled={payload && payload.isUpdate} required
					
					/>
                </Row>
                <Row>
                    <Input 
						value={form.code} label='code' name='code' 
						onChange={handleChange} type='text'
						required
					/>
                </Row>
			</Row>
			<Row style={{'justify-content': 'center'}}>
				<LoadingButton loading={loading} variant='contained' onClick={handleSubmit}>Create</LoadingButton>
			</Row>
		</ModalForm>
	)
}
