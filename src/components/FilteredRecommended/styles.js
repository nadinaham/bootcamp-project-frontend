import styled from 'styled-components'

export const Text = styled.h1`
  color: black;
  font: 'Times New Roman';
  font-size: 20px;
  text-align: center;
  letter-spacing: auto;
`

export const Container = styled.div`
  height: 80vh;
  width: 100%;
  margin-top: 30px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  text-align: center;
  z-index: 1
`