import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  align-items: center;
  justify-items: center;

  grid-column: 1fr 1.3fr;

  grid-template-areas: 'content photo';
`

export const Form = styled.form`
  grid-area: content;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  > h1 {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;

    color: ${({ theme }) => theme.COLORS.PINK_500};
  }

  > p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > h2 {
    margin-block: 4.8rem;

    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  > button {
    margin-top: calc(2.4rem - 0.8rem);
  }

  > a {
    margin: 2.4rem auto 0;
  }
`

export const Background = styled.img`
  grid-area: photo;

  width: 100%;
  height: 100vh;
  object-fit: cover;

  filter: brightness(0.4);
`
