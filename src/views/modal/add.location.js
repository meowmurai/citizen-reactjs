import {useState, useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux'

import {
	ModalForm, Title, Row, Input, InputDate, LoadingButton, Grid, Selector, Toggle
} from '../../_components'
import { modalActions, userActions, locationActions } from '../../_actions'


export default function AddLocationForm({show,...rest}){
	const loading = useSelector(state => state.createUser.loading)
	const account = useSelector(state => state.authentication.user)
	const [form, setForm] = useState({
		name: '',
		code: ''
	})	
	const role = account ? account.role : null
	const dispatch = useDispatch()

	const handleChange = (e) =>{
		setForm({...form, [e.target.name]: e.target.value})
	}
	const handleSubmit = async () =>{
		dispatch(locationActions.create(form),() => {
			dispatch(modalActions.addUser())
		})
	}

	return (
		<ModalForm show={show} className='appear' style={{'z-index': '2'}}>
			<Row>
				<Title>Create new {role == "A1"? 'City': role == 'A2'? 'province' : role == 'A3'? 'District': role == 'B1'? 'Sub-district' : 'N/A'}</Title>
			</Row>
			<Row style={{'justifyContent': 'center','flexWrap': 'wrap'}}>
                <Row>
                    <Input label='name' name='name' onChange={handleChange} type='text' required/>
                </Row>
                <Row>
                    <Input label='code' name='code' onChange={handleChange} type='text'/>
                </Row>
			</Row>
			<Row style={{'justify-content': 'center'}}>
				<LoadingButton loading={loading} variant='contained' onClick={handleSubmit}>Create</LoadingButton>
			</Row>
		</ModalForm>
	)
}
