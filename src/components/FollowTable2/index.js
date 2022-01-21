import React from 'react'
import { Container, Text } from './styles'
import PersonItem from '../PersonItem2'


const FollowTable2 = props => {
  if (props.data.followsByFollower.length === 0) {
    return (<><Text>Who Are You Following?</Text><Text>You aren't following anyone yet</Text></>)
  }

  return (
    <Container>
      <Text>Who Are You Following?</Text>
      <table>
        <thead>
          <tr>
            <td><Text>First Name</Text></td>
            <td><Text>Last Name</Text></td>
            <td><Text>Email</Text></td>
            <td><Text>Delete</Text></td>
          </tr>
        </thead>
        <tbody>
          {props.data.followsByFollower.map(elt =>
            <PersonItem data={elt} />
            )}
        </tbody>
      </table>
    </Container>
  )
}

export default FollowTable2
