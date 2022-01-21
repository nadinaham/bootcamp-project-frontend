import styled from 'styled-components'

export const TableHeader = styled.h1`
  color: black;
  font: 'Times New Roman';
  font-size: 20px;
  text-align: center;
  letter-spacing: auto;
  background-color: ${props => props.theme.colors.sandy};
`

export const HeaderRow = styled.tr`
  border-radius: 20px 20px 0px 0px;
`

export const Container = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.main}
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  gap: 20px;
  text-align: center;
  z-index: 1;
  table{
    max-height: 90%;
    margin-left: 5%;
    width: 90%;
    max-width: 90%;
    background: ${props => props.theme.colors.sandy};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.brown};
    border-radius: 20px 20px 0px 0px;
    border-collapse: separate !important;
    border-spacing: 0;
    font-size: 1.2em;
    table-layout: fixed;
    min-width: 400px;
    max-height: 400px;
    tr{
      border-bottom: 1px solid ${props => props.theme.colors.brown};
      max-width: 90%;
      td{
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    tbody{
      max-width: 90%;
      border-radius: 20px;
      tr:nth-of-type(even) {
      background-color: ${props => props.theme.colors.lightheader};
    }
    tr:nth-of-type(odd) {
      background-color: ${props => props.theme.colors.nyanza};
    }
    tr:last-of-type {
      border-radius: 0px 0px 20px 20px;
    } 
    }

  }
`

export const Header = styled.h2`
  margin: 0;
  background-color: ${props => props.theme.colors.header};
  padding: 10px;
  border-radius: 20px 20px 0px 0px;
  `

export const SubHeader = styled.div`
  margin: 0;
  background-color: ${props => props.theme.colors.lightheader};
  padding: 10px;
  border-radius: 0px 0px 5px 5px;
  `

export const InputContainer = styled.div`
  input{
    border-radius: 5px;
    min-width: 300px;
    padding: 5px;

  }`

/*header: '#FED18C',
lightheader: '#FED99B',
lblue: '#D6EFFF',
white: '#FEFEFF',
brown: '#794901',
submit: '#4CAF50',
submithover: '#449C47',
main: '#FFE7C2',
llblue: '#EBF7FF'*/