import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions, modalActions } from '../../_actions'
import {
	Grid, Card, CardHeader, CardContent, CardTitle
} from '../../_components'

import { AgeChart, JobChart, GeoMap, TestChart } from '../_sections/analyticsChart'

import { 
	Container,
	Title,
	Row,
} from './elements'


export default function Analytics(){
	return (
		<Container>
			<Title>Survey Analytics</Title>
			<Row>
				<Grid sm={12} md={4} lg={8}>
					<Card style={{height: '100%'}}>
						<CardHeader >
							<CardTitle>Statistics of age by sex</CardTitle>
						</CardHeader>
						<CardContent>
							<AgeChart />
						</CardContent>
					</Card>
				</Grid>
                {/* <Grid sm={0} md={1} lg={1}>
				</Grid> */}
				<Grid sm={12} md={4} lg={4}>
					<Card style={{height: '100%'}}>
						<CardHeader>
							<CardTitle>Statistics of occupation</CardTitle>
						</CardHeader>
						<CardContent>
                            <JobChart />
						</CardContent>
					</Card>
				</Grid>
			</Row>
            <Row>
				<Grid sm={12} md={12} lg={12}>
					<Card>
						<CardHeader >
							<CardTitle>Location Management</CardTitle>
						</CardHeader>
						<CardContent>
							<GeoMap />
						</CardContent>
					</Card>
				</Grid>
            </Row>
		</Container>
	)
}