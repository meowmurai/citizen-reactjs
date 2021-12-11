import styled, {keyframes} from 'styled-components'

const keyframes1 = keyframes`
	0%{top: -500px;}
	100%{top: 100px;}
`
const keyframes2 = keyframes`
	0%{opacity: 0%;}
	100%{opacity: 100%;}
`

const Container = styled.div`
	position: relative;
	top: 0;
	left: 0;
	width: 30%;
	min-width: 300px;
	height: 0;
	z-index: 10;
	margin: auto;
	display: flex;
	justify-content:center;
`

const FormWrapper = styled.div`
	background-color: #fff;
	position: absolute;
	top: 100px;
	left: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
	border-radius: 10px;
	padding: 16px;
	transition: 0.2s all ease-in-out;
	@keyframes transform{
		0%{top: -500px;}
		100%{top: 100px;}
	}
	@keyframes appear{
		0%{opacity: 0%;}
		100%{opacity: 100%;}
	}
	&.transform{
		${({show}) => show ? `animation: transform` : `top: -800px`}
	}
	&.appear{
		${({show}) => show ? `animation: appear` : `opacity: 0`}
	}
	
`

export const Row = styled.div`
	width: 80%;
	margin: 10px;
	display: flex;
	justify-content: center;
`

export const ModalForm = ({
	children,
	show,
	...rest
}) => {
	return (
		<Container>
			<FormWrapper show={show} {...rest}>
				{children}
			</FormWrapper>
		</Container>
	)
}