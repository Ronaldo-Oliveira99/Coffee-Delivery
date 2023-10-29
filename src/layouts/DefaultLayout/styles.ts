import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  /*   height: calc(100vh - 10rem); */

  margin: 0 auto;
  /* padding: 2.5rem; */
  background: ${(props) => props.theme['white-500']};
  /* border-radius: 8px; */

  display: flex;
  flex-direction: column;
`
