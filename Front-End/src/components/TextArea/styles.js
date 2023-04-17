import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.COLORS.PINK_500};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
`
