import styled from 'styled-components'
import { BaseContainer } from '../../style'

export const OrderAreaContainer = styled(BaseContainer)`
  width: 40rem;
`

export const LabelFormContainer = styled.div`
  padding-bottom: 2rem;
  display: flex;
  div {
    padding-left: 8px;
    p {
      font-weight: 400;
    }
    p:nth-child(1) {
      font-size: 20px;
    }
  }
`
