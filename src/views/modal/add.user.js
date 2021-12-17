import {useState, useEffect} from 'react'

import { ModalForm, Row } from '../../_components/form'
import { Input } from '../../_components/inputs'
import { LoadingButton } from '../../_components/buttons'
import { userActions } from '../../_actions'
import { useDispatch, useSelector  } from 'react-redux'

import NiceAvatar, { genConfig } from 'react-nice-avatar'
import { Toggle } from '../../_components/toggle'

export default function AddUserForm({show,...rest}){
	const [loading, setLoading] = useState(false)
	const [defaultUsername, setDefaultUsername] = useState('')
	const [form, setForm] = useState({
		username: '',
		email: '',
		password: ''
	})
	const users = useSelector(state => state.users.items)
	const dispatch = useDispatch()
	const avtConfig = genConfig()

	useEffect(()=>{

	}, [])

	const handleChange = (e) =>{
		setForm({...form, [e.target.name]: e.target.value})
	}
	const handleSubmit = async () =>{
		setLoading(true)

	}

	return (
		<ModalForm show={show} className='appear' width='400px' style={{'z-index': '2'}}>
			<Row style={{'flex-direction': 'column'}}>
				<h2 style={{margin: '0', 'text-align': 'center'}}>Create account</h2>
			</Row>
			<Row style={{'justify-content': 'space-between', 'flex-wrap': 'wrap', 'margin': '10px 15px'}}>
				<span>for</span>
				<Toggle ></Toggle>
				<div style={{width: '100%'}}/>
				<span style={{'display': 'block'}}>
					username: 
				</span>
				<span>{defaultUsername}</span>
			</Row>
			<Row>
				<Input label='email' name='email' onChange={handleChange} required/>
			</Row>
			<Row>
				<Input label='password' name='password' onChange={handleChange} type='password' required/>
			</Row>
			<Row style={{'justify-content': 'center'}}>
				<LoadingButton loading={loading} variant='contained' onClick={handleSubmit}>Create</LoadingButton>
			</Row>
		</ModalForm>
	)
}