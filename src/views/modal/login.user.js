import {useState, useEffect} from 'react'

import {
	ModalForm, Title, Row, Input, LoadingButton
} from '../../_components'
import { userActions } from '../../_actions'
import { useDispatch, useSelector  } from 'react-redux'

export default function LoginForm({show, rest}){
	const loading = useSelector(state => state.authentication.loading)
	const dispatch = useDispatch()
	const [form,setForm] = useState({
		username: '',
		password: ''
	})


	//events handle
	const handleChange = (e) =>{
		setForm({...form, [e.target.name]: e.target.value})
	}
	const handleSubmit = async () =>{
		dispatch(userActions.login(form.username, form.password, ()=>{window.location.reload(true);}))

	}
	return (
		<ModalForm show={show} width="400px" className='transform' {...rest}>
			<Row>
				<Title>Login</Title>
			</Row>
			<Row>
				<Input label='username' name='username' onChange={handleChange} required/>
			</Row>
			<Row>
				<Input label='password' name='password' onChange={handleChange} type='password' required/>
			</Row>
			<Row>
				<LoadingButton loading={loading} variant='contained' onClick={handleSubmit}>Login</LoadingButton>
			</Row>
		</ModalForm>
	)
}