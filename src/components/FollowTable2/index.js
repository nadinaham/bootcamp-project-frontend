import React from 'react'
import { Container, Text } from './styles'
import PersonItem from '../PersonItem2'

const FollowTable2 = props => {
  if (props.data.followsByFollower.length === 0) {
    return (<Text>No Elements in Table</Text>)
  }
  return (
    <Container>
      <Text>Who Are You Following?</Text>
      <table>
        <thead>
          <tr>
            <td><Text>Followed User ID</Text></td>
            <td><Text>Follower User ID</Text></td>
          </tr>
        </thead>
        <tbody>
          {props.data.followsByFollower.map(friend => (
            <PersonItem key={friend.id} followedUserID={friend.followedUserID} followingUserID={friend.followingUserID} currentlyReading={friend.currentlyReading} />
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default FollowTable2
