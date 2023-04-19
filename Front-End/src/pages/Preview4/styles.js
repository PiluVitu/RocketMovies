import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem 12.3rem 15.6rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 4rem;

  > header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 2.4rem;

    a {
      width: fit-content;
    }
  }
`

export const TitleAndRate = styled.section`
  display: flex;
  align-items: center;
  gap: 1.9rem;

  > h2 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;

    padding-bottom: 7px;
  }
`

export const Rate = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.PINK_500};

  font-size: 2.3rem;
`

export const Details = styled.section`
  display: flex;

  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
`

export const User = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  > img {
    width: 1.6rem;
    height: 1.6rem;

    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};

    border-radius: 50%;
  }
`
export const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK_500};
  }
`

export const Tags = styled.section`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const Description = styled.p`
  height: 35rem;
  overflow-y: auto;

  &&::-webkit-scrollbar {
    width: 0.8rem;
  }

  &&::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK_500};
    border-radius: 0.8rem;
  }
`
