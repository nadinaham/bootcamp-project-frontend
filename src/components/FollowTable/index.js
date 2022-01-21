import React from 'react'
import { Container, Text } from './styles'
import PersonItem from '../PersonItem'

const FollowTable = (props) => {
  if (props.data.followsByFollowed.length === 0)
  {
    return (<Text>No followers at the moment!</Text>)
  } else {
    return (
        <Container>
            <Text>Who's Following You?</Text>
            <table>
        <thead>
            <tr>
            <td><Text>First Name</Text></td>
            <td><Text>Last Name</Text></td>
            <td><Text>Email</Text></td>
            </tr>
        </thead>
        <tbody>
          {props.data.followsByFollowed.map(friend => (
            <PersonItem data={friend}/>
          ))}
    </tbody>
  </table>
        </Container>
    )
  }
}

export default FollowTable
