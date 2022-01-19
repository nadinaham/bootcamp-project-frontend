import styled from 'styled-components'

export const Container = styled.body`
    background-color: ${props => props.theme.colors.header};
    width: 100%;
    height: 100vh;
    margin: 0;
    z-index: -1; `

export const Card = styled.div`
    height: 60vh;
    position: absolute;
    top: 10vh;
    width: 60%;
    left: 20%;
    border-radius: 20px;
    border: 2px solid ${props => props.theme.colors.brown};
    background-color: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    text-align: center;
    z-index: 1;
`