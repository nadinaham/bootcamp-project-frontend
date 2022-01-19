import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import { GET_FOLLOWS_BY_USER } from './graphql'
import FollowTable from '../../components/FollowTable'

const Follows = () => {
    const ID = "d74c2b6e-ae25-4153-991f-1fa44fdff81e"
    const {loading, error, data} = useQuery(GET_FOLLOWS_BY_USER, {
        variables: {followingUserID: ID}})
    if (loading) 
    {
        return <Container><Text>Loading...</Text></Container>
    } else if (error)
    {
        return <Container><Text>Error!</Text></Container>
    }
    return (
        <Container>
            <FollowTable data={data} />
        </Container>
    )
}

export default Follows
