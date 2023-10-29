import styled from 'styled-components'

export const SummaryOrderListContainer = styled.div`
  padding: 2.5rem 2.5rem;
  background-color: ${(props) => props.theme['gray-100']};

  hr {
    margin: 1.5rem 0;
    background-color: ${(props) => props.theme['hr-1']};
    height: 1%;
    border: none;
  }
  ul {
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;
    }
    button {
      width: 100%;
    }
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  /*   gap: 0.5rem; */
  font-weight: bold;

  cursor: pointer;

  // cor do texto
  background-color: #dbac2c;
  color: white;
  margin-top: 1.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: #dbac2c;
  }
`
