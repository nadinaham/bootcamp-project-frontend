import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import { GET_FOLLOWS_BY_USER, GET_FOLLOWERS_BY_USER } from './graphql'
import FollowTable from '../../components/FollowTable'
import FollowTable2 from '../../components/FollowTable2'

const FollowTableP1 = () => {
    const ID = "d74c2b6e-ae25-4153-991f-1fa44fdff81e"
    const {loading, error, data} = useQuery(GET_FOLLOWS_BY_USER, {
        variables: {followedUserID: ID}})
    if (loading) 
    {
        return <Container><Text>Loading...</Text></Container>
    } else if (error)
    {
        return <Container><Text>Error!</Text></Container>
    }
    return (
        <FollowTable data={data} />
    )
}

const FollowTableP2 = () => {
    const ID = "d74c2b6e-ae25-4153-991f-1fa44fdff81e"
    const {loading, error, data} = useQuery(GET_FOLLOWERS_BY_USER, {
        variables: {followingUserID: ID}})
    if (loading) 
    {
        return <Container><Text>Loading...</Text></Container>
    } else if (error)
    {
        return <Container><Text>Error!</Text></Container>
    }
    return (
        <FollowTable2 data={data} />
    )
}

const Follows = () => {
    return (
        <Container>
            <FollowTableP1 />
            <FollowTableP2 />
        </Container>
    )
}

export default Follows
