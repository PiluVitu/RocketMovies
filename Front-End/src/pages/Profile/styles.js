import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > section {
    width: 100%;
    height: 14.4rem;
    display: flex;
    align-items: center;
    justify-content: start;

    background: ${({ theme }) => theme.COLORS.PINK_SHADOW};

    padding-inline: 14.4rem;

    a {
      width: fit-content;
    }
  }
`
export const Form = styled.form`
  width: 34rem;

  margin: -9rem auto;
  display: flex;
  gap: 2.4rem;
  flex-direction: column;
  align-items: center;

  > button {
    width: 100%;
  }
`
export const ProfileImg = styled.fieldset`
  border: none;

  text-align: center;

  > img {
    border-radius: 50%;
    object-fit: cover;
    width: 18.6rem;
    height: 18.6rem;
  }

  > label {
    padding: 1.4rem;
    width: fit-content;
    display: flex;
    margin: 0;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.COLORS.PINK_500};
    border-radius: 50%;
    cursor: pointer;

    position: relative;
    left: 13rem;
    bottom: 6rem;

    svg {
      font-size: 20px;
    }

    input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  }
`
export const NameAndEmail = styled.fieldset`
  border: none;
  width: 100%;
`
export const Password = styled.fieldset`
  border: none;
  width: 100%;
`
