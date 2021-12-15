import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import {
	NotiContainer,
	NotiItem
} from './elements'
export default function Notification({children}){
	const alerts = useSelector(state => state.alert)

	console.log(alerts)

	return (
		<NotiContainer>
			{alerts.map(alert => {
				return (
					<NotiItem key={alert.id} {...alert}/>
				)
			})}
		</NotiContainer>
	)
}

