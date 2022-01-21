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
                <td><Text>Followed User ID</Text></td>
                <td><Text>Follower User ID</Text></td>
            </tr>
        </thead>
        <tbody>
          {props.data.followsByFollowed.map(friend => (
            <PersonItem key={friend.id}  followedUserID={friend.followedUserID} followingUserID={friend.followingUserID}/>
          ))}
    </tbody>
  </table>
        </Container>
    )
  }
}

export default FollowTable
