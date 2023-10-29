import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding: 0 10rem 10rem;
  display: flex;
  gap: 2rem;
`

export const BaseContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Roboto', sans-serif;
`

export const ConfirmContainer = styled(BaseContainer)`
  width: 28rem;
  background-color: green;
`
