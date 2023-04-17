import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding-left: 1.6rem;
  margin-bottom: 0.8rem;

  border-radius: 1rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  > input {
    padding-block: 1.8rem;

    width: 100%;

    border: none;

    background: transparent;

    color: ${({ theme }) => theme.COLORS.WHITE_500};

    padding-left: 1.6rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
  }

  &&::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`
