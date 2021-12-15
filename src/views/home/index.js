import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../_actions'

import NiceAvatar, { genConfig } from 'react-nice-avatar'

import { Grid } from '../../_components/containers'
import {LoadingButton} from '../../_components/buttons'
import { Button } from '../../_components/buttons'
import {Input} from '../../_components/inputs'

import UsersTable from '../sections/usersTable'

import { 
	Container,
	Title,
	Row,
	Card,
	CardHeader
} from './elements'


export default function Home(){
	const dispatch = useDispatch()


	return (
		<>
			<Container>
				<Title>Account</Title>
				<Row>
					<Grid sm={12} lg={8}>
						<Card>
							<CardHeader>
								City You manages
							</CardHeader>
							<UsersTable/>
						</Card>
					</Grid>
					<Grid sm={12} lg={4}>
					</Grid>
				</Row>
			</Container>
		</>
	)
}