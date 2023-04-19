import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 62vh;
  padding: 2.74rem 12.3rem 0 12.3rem;

  > header {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 3.8rem;

    h2 {
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 4.2rem;
    }

    button {
      padding-inline: 3.2rem;
    }
  }
`

export const Movies = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  overflow-y: auto;

  &&::-webkit-scrollbar {
    width: 0.8rem;
  }

  &&::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK_500};
    border-radius: 0.8rem;
  }
`
