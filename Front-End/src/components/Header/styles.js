import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.4rem;

  width: 100%;

  padding: 4rem 12.3rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > div {
    margin-bottom: 0;

    width: 60%;
  }
`

export const Brand = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  color: ${({ theme }) => theme.COLORS.PINK_500};
`

export const Profile = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;

  > section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h3 {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;

      color: ${({ theme }) => theme.COLORS.WHITE_400};
    }

    a {
      width: fit-content;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 50%;
  }
`
