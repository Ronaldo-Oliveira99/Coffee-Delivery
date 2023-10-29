import styled from 'styled-components'

export const OrderPaymentContainer = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  .paydiv {
    display: flex;
    gap: 0.75rem;
    /*    background-color: blue; */
    flex: 1 1 0px;
    justify-content: center;
    height: 3.18rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background-color: ${(props) => props.theme['gray-300']};
      padding: 1rem;
      width: 11.16rem;
      font-size: 0.7rem;
    }
  }
`
