import styled, {keyframes} from 'styled-components'


export const ModalForm = ({
	children,
	show,
	width,
	...rest
}) => {
	return (
		<Container width={width}>
			<FormWrapper show={show} {...rest}>
				{children}
			</FormWrapper>
		</Container>
	)
}
export const Title = styled.h2`
	margin: 0;
	display: block;
	color: ${props => props.theme.palete.primary.main};
`
const Container = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	width: ${props => props.width ? props.width : '40%'};
	min-width: 300px;
	max-width: 95%;
	height: 0;
	z-index: 10;
	margin: auto;
	display: flex;
	justify-content:center;
`

const FormWrapper = styled.div`
	background-color: #fff;
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(-50%, -50%);
	flex-basis: 100%;
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
	border-radius: 10px;
	padding: 16px;
	transition: 0.2s all ease-in-out;
	@media screen and (max-width: 768px){
		padding: 4px;
	}
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
		${({show}) => show ? `display: flex;animation: appear` : `display: none`}
	}
	
`

export const Row = styled.div`
	flex-basis: 100%;
	margin: 10px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`



