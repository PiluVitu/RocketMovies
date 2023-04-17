import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
      font-size: 62.5%;
    }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
    }

    body {
      font-size: 1.6rem;
      font-family: 'Roboto Slab', serif;

      background-color:${({ theme }) => theme.COLORS.BACKGROUND_900} ;
      
      color: ${({ theme }) => theme.COLORS.WHITE_400};

    }

    body, button, input, textarea {
      font-family: 'Roboto Slab', serif;
      font-size: 1.6rem;
    }

    a {
      text-decoration: none;
    }

    button, a {
      cursor: pointer;
      transition: all 0.3s;
    }
    button:hover, a:hover {
    filter: brightness(0.9);
    }

    
`
