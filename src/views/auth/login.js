import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import {ModalForm, Row} from '../../_components/form'
import {Input} from '../../_components/inputs'
import {LoadingButton} from '../../_components/buttons'
import {userActions} from '../../_actions'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

export default function LoginForm({showLogin, rest}){
	const [form,setForm] = useState({
		username: '',
		password: ''
	})
	const loading = useSelector(state => state.authentication.loading)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleChange = (e) =>{
		setForm({...form, [e.target.name]: e.target.value})
	}
	const handleSubmit = async () =>{
		dispatch(userActions.login(form.username, form.password, ()=>{window.location.reload(true);}))

	}
	return (
		<ModalForm show={showLogin} className='transform' {...rest}>
			<Row>
				<h2>Login</h2>
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