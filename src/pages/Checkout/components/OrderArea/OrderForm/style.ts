import styled from 'styled-components'

export const OrderFormContainer = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  padding-bottom: 6.5rem;
  padding: 2.5rem;

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`

const BaseInput = styled.input`
  height: 2.5rem;
  border: 0;
  border: 2px solid ${(props) => props.theme['gray-301']};
  border-radius: 0.2rem;
  font-size: 0.87rem;
  padding: 0.75rem;
  background-color: ${(props) => props.theme['gray-300']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['gray-400']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }
`
export const CepInput = styled(BaseInput)`
  width: 12.5rem;
  margin-right: 22.5rem;
`

export const StreetInput = styled(BaseInput)`
  width: 100%;
`

export const NumberInput = styled(BaseInput)`
  width: 12.5rem;
`
export const ComplementoInput = styled(BaseInput)`
  width: 21.7rem;
`
export const BairroInput = styled(BaseInput)`
  width: 12.5rem;
`
export const CityInput = styled(BaseInput)`
  width: 17.25rem;
`
export const UfInput = styled(BaseInput)`
  width: 3.75rem;
`
