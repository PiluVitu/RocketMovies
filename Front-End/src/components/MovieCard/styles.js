import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  padding: 3.2rem;
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.COLORS.PINK_SHADOW};
  color: inherit;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > h3 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`

export const Rating = styled.section`
  color: ${({ theme }) => theme.COLORS.PINK_500};
`

export const Tags = styled.section`
  display: flex;

  align-items: center;
  gap: 0.8rem;
  justify-content: flex-start;
`
