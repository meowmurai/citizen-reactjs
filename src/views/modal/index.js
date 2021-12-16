import { useSelector, useDispatch } from 'react-redux'

import LoginForm from './login'

export default function ModalProvider(){
	const formName = useSelector( state => state.modal.name )
	const show = useSelector( state => state.modal.show )

	switch(formName){
		case 'login':
			return <LoginForm className='transform' show={show}/>
		default:
			return <></>
	}
}