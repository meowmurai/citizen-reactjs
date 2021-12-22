import { useSelector, useDispatch } from 'react-redux'

import LoginForm from './login.user'
import AddUserForm from './add.user'
import AddSchedule from './add.schedule'

export default function ModalProvider(){
	const formName = useSelector( state => state.modal.name )
	const show = useSelector( state => state.modal.show )
	const payload = useSelector( state => state.modal.payload )

	switch(formName){
		case 'login':
			return <LoginForm show={show}/>
		case 'add_user':
			return <AddUserForm show={show}/>
		case 'add_schedule':
			return <AddSchedule show={show} payload={payload}/>
		default:
			return <></>
	}
}