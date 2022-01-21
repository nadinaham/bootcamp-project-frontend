import styled from 'styled-components'

export const Text = styled.h1`
  color: black;
  font: 'Times New Roman';
  font-size: 20px;
  text-align: center;
  letter-spacing: auto;
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
        text-align:center;
        h2{
          text-align:center;
        }
      }
    }
    tbody{
      max-width: 90%;
      border-radius: 20px;
      tr{
        td{
          border-left: thin solid ${props => props.theme.colors.brown}
        }
      }
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