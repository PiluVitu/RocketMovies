import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  border-radius: 1rem;

  background: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_800};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_500}` : 'none'};

  > input {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE_500};

    &&::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  }

  > button {
    background: none;
    border: none;
    padding-top:3px;
    svg {
      color: ${({ theme }) => theme.COLORS.PINK_500};
    }
  }
`
