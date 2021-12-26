import {useState, useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux'

import {
	ModalForm, Title, Row, Input, InputDate, LoadingButton, Grid, Selector, Toggle
} from '../../_components'
import { modalActions, userActions, locationActions } from '../../_actions'


export default function ShowInfoForm({show, payload, ...rest}){

	return (
		<ModalForm show={show} className='appear' width='300px' style={{'z-index': '2'}}>
			<Row>
				<Title>
					
				</Title>
			</Row>
			<Row style={{'justifyContent': 'center','flexWrap': 'wrap'}}>
                <Row>
                    Username: {payload.fullname}
                </Row>
				<Row>
                    Date of birth: {payload.dob}
                </Row>
				<Row>
                    Gender: {payload.gender}
                </Row>
				<Row>
                    Job: {payload.job}
                </Row>
				<Row>
                    Hometow: {payload.hometown}
                </Row>

                <Row>
                    
                </Row>
			</Row>
		</ModalForm>
	)
}
