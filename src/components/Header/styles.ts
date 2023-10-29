import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;

  img {
    width: 5.3rem;
    height: 2.5rem;
    margin-left: 10rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;
    width: 12.07rem;
    height: 2.37rem;
    margin-right: 10rem;

    div {
      display: flex;
      align-items: center;
      width: 8.94rem;
      background-color: ${(props) => props.theme['purple-100']};
      border-radius: 8px;

      svg {
        background-color: ${(props) => props.theme['purple-100']};
        color: ${(props) => props.theme['purple-900']};
        margin-left: 0.5rem;
      }
      span {
        color: ${(props) => props.theme['purple-900']};
      }
    }

    a {
      width: 2.75rem;

      background-color: ${(props) => props.theme['yellow-100']};
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['yellow-900']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      /*  &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      } */

      /*  &.active {
        color: ${(props) => props.theme['green-500']};
      } */
    }
  }
`
