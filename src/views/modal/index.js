import { useSelector, useDispatch } from 'react-redux'

import LoginForm from './login.user'
import AddUserForm from './add.user'

export default function ModalProvider(){
	const formName = useSelector( state => state.modal.name )
	const show = useSelector( state => state.modal.show )

	switch(formName){
		case 'login':
			return <LoginForm show={show}/>
		case 'add_user':
			return <AddUserForm show={show}/>
		default:
			return <></>
	}
}