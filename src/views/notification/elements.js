import { useState, useEffect } from 'react' 
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { alertActions } from '../../_actions' 
import { IconButton } from '../../_components/buttons'

export const NotiItem = (props)=> {
	const [barWidth, setBarWidth] = useState(0)
	const [exit, setExit] = useState(false)
	const [intervalID, setIntervalID] = useState(null)
	const dispatch = useDispatch()

	//create a interval at very first time component created
	useEffect(() => {
		handleStartTimer()
	}, [])


	//start a interval which increase barWidth by 0.5% every 20ms
	const handleStartTimer = () => {
	    const id = setInterval(() => {
	      	setBarWidth(prev => {
	        	if (prev < 100) {
	          		return prev + 0.5
	        	}else{
	        		clearInterval(id)
	        		handleClose()
	        		return prev
	        	}
	        })
	    }, 20)
	    setIntervalID(id)
	};
	const handlePauseTimer = () => {
	    clearInterval(intervalID);
	};

	//trigger when user click on x button
	const handleClose = () => {
		setExit(true)
		setTimeout(() => {
			dispatch(alertActions.remove(props.id))
		}, 400)
	}
	return (
		<NotiWrapper className={`${props.type} ${exit ? 'exit' : ''}`}>
			<IconButton onClick={handleClose}><i className="fas fa-times-circle"></i></IconButton>
			<p>{props.message}</p>
			<Bar width={`${barWidth}%`} />
		</NotiWrapper>
	)
}

export const NotiContainer = styled.div`
	position: fixed;
	top: 10px;
	right: 10px;
	z-index: 9999;
`
const NotiWrapper = styled.div`
	position: relative;
	width: 150px;
	border-radius: 5px;
	overflow: hidden;
	margin-bottom: 10px;
	box-shadow: 0 0 10px rgba(0,0,0, 0.3);

	animation: 0.4s all ease-in-out;
	animation-name: slideLeft;
	animation-fill-mode: forwards;
	& > button {
		position: absolute;
		top: 0;
		right: 0;
		font-size: 1rem;
		color: ${props => props.theme.palete.secondary.main};
	}
	& > p{
		margin: 0;
		padding: 4px 8px;
		color: ${props => props.theme.palete.secondary.main};
	}

	&.alert-success {
		background: ${props => props.theme.palete.green};
	}
	&.alert-danger {
		background: ${props => props.theme.palete.red};
	}
	&.exit {
		animation-name: slideRight;
		animation-fill-mode: forwards;
	}

	@keyframes slideRight{
		0% {
			margin-left: 0;
		}
		100% {
			margin-left: 120%;
		}
	}
	@keyframes slideLeft{
		0% {
			margin-left: 120%;
		}
		100% {
			margin-left: 0%;
		}
	}
`
const Bar = styled.div`
	height: 10px;
	width: ${props => props.width};
	background-color: #000;
	opacity: 0.2;
`