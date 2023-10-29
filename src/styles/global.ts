import { createGlobalStyle } from 'styled-components'
// necessário criar o arquivo @types/styled.d.ts para definir um Tema(theme)
export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};;
}


body{
    background:${(props) => props.theme['gray-901']};
    color:${(props) => props.theme['gray-900']};
    -webkit-flow-smoothing: antialiased;
}

body , text-area{
    font-family: 'Baloo 2', sans-serif;
    font-size: 400;
    font-size: 1rem;
}
input {
    font-family: 'Roboto', sans-serif;
}

`
