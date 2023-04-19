import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: 113.8rem;

  margin: 2rem auto 0;

  > header {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    align-items: flex-start;

    a {
      width: fit-content;
    }

    h2 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
    }
  }

  > textarea {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border-radius: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE_500};

    resize: none;

    padding: 1.9rem 1.6rem;
  }

  > footer {
    display: flex;
    align-items: center;

    gap: 4rem;

    button:nth-child(1) {
      background: ${({ theme }) => theme.COLORS.BLACK_400};
      color: ${({ theme }) => theme.COLORS.PINK_500};
    }

    button {
      width: 100%;
    }
  }
`

export const Primary = styled.fieldset`
  border: none;
  display: flex;
  align-items: center;
  gap: 4rem;
`
export const Tags = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2.4rem;

  > h3 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  > section {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    padding: 1.6rem;
    border-radius: 0.8rem;

    width: 100%;

    background: ${({ theme }) => theme.COLORS.BLACK_400};
  }
`
