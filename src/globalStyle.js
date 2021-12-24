import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Poppins', sans-serif;
  }
`
export const theme = {
  palete: {
    primary: {
      main: '#564ec1',
      lighter: '#6960db'
    },
    secondary: {
      lighter: '#fff',
      main: '#E5E5E5',
      darker: '#8487E9',
    },
    red: '#fa5558',
    green: '#4aed45',
    black: '#121029',
    gray: '#2e3138',
    backColor: '#e6e4eb',
    pink: '#FF6396',
    blue: '#3CA2C8'
  },
  spacing: {
    container_gutter_lg : '160px',
    container_gutter_md : '80px',
    container_gutter_sm : '16px',
    context_gutter_sm: '1rem',
    context_gutter_md: '1.5rem'
  }
}