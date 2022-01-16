import styled from 'styled-components'


export const FlexContainer = styled.div`
    width: 80%;
    display: flex;
    gap: 20px;
    padding: 0 10%;
    `

export const Input = styled.input`
    flex: 1;
    width: 100%;
    border: 1px solid ${props => props.theme.colors.brown};
    border-radius: 5px;
    background-color: ${props => props.theme.colors.white};
    font-size: 22px;
    padding: 5px 10px;`



