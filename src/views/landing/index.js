import {LoadingButton} from '../../_components/buttons'
import {Input} from '../../_components/inputs'
import {Hero, Logo, Container, Survey, Row, About, Divider, Context} from './elements'
export default function Landing(){
	return (
		<>
			{/*<Hero>
				<Logo>
					<img width='100%' src='/imgs/hero.svg' />
				</Logo>
			</Hero>*/}
			<Container>
				<h1 style={{'textAlign': 'center'}}>Survey</h1>
				<Context>
					<Survey>
						<h3 style={{'text-align': 'center'}}>Complete your survey</h3>
						<Row>
							<Input name='firstname' label='First name' required/>
							<Input name='lastname' label='Last name' required/>
						</Row>
						<Row><Input name='mail' label='Your Mail Address' /></Row>
						<Row><Input name='citizenID' label='Citizen identification' type='number' required/></Row>
						<Row><LoadingButton variant='contained'>Submit</LoadingButton></Row>
					</Survey>
					<About>
						<h3 style={{'text-align': 'center'}}>About us</h3>
						<p>&emsp; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					</About>
				</Context>
			</Container>
		</>
	)

}