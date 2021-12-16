import styled from 'styled-components'

export const TableScroll = styled.div`
	position: relative;
	height: 600px;
	overflow: auto;
`


export const Table = styled.table`
	background-color: transparent;
	border-collapse: collapse;
  	width: 100%;
  	tr{
  		background-color: ${props => props.theme.palete.secondary.lighter};

  	}
  	thead{
  		position:relative;
  		width: 100%;
  	}
  	th,td{
  		border-bottom: 2px solid ${props => props.theme.palete.backColor};
  		padding: 8px;
  		text-align: left;
  	}
  	td{
  		font-size: 0.8rem;
  	}
  	th:first-child, td:first-child{
  		padding-left: 1.5rem;
  	}
  	th:last-child, td:last-child{
  		padding-right: ${props => props.theme.spacing.context_gutter_md};
  	}
  	@media screen and (max-width: 768px){
  		th:first-child, td:first-child{
	  		padding-left: 1rem;
  		}
  		th:last-child, td:last-child{
	  		padding-right: ${props => props.theme.spacing.context_gutter_sm};
	  	}
  	}
`