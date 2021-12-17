import styled  from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { modalActions } from '../../_actions'

export const Overlay = styled.div`
	background-color: #000;
	opacity: 0.4;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	display: none;
	&.show {
		display: block;
	}
`

export default function OverlayProvider(){
	const overlay = useSelector(state => state.modal.overlay)
    const dispatch = useDispatch()

    const close = () => {
    	dispatch(modalActions.close())
    }
    return (
    	<Overlay 
    		className={`${overlay ? 'show' : ''}`}
    		onClick={close}
    	/>
    )
}