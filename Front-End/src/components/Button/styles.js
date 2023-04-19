import styled from 'styled-components'

export const Container = styled.button`
  padding-block: 1.68rem;
  border: none;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.1rem;

  background: ${({ theme }) => theme.COLORS.PINK_500};
`
