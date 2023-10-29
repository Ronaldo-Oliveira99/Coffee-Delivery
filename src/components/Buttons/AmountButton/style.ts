import styled from 'styled-components'

export const AmountButtonBase = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2rem;
  background-color: #e6e5e5;
  border-radius: 4px;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;
`
export const AmountButtonContainer = styled(AmountButtonBase)`
  span {
    text-align: center;
    font-size: 1.13rem;
    font-weight: 200;
    padding: 0 0.31rem;
  }
`
