import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
  background-color: #f3f2f2;
  height: 19.37rem;
  width: 16rem;
  align-items: center;
  display: flex;
  flex-direction: column;

  p,
  ul {
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }

  p {
    margin: 0 1.25rem;
    font-size: 0.87rem;
    font-weight: 400;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 0.25rem;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 0.62rem;
  }

  li {
    border-radius: 12px;
    color: #c47f17;
    background-color: #f1e9c9;
    padding: 4px 8px;
  }

  img {
    margin-top: calc(0px - 1.5rem - 3px);
    padding-bottom: 0.75rem;
  }
`
