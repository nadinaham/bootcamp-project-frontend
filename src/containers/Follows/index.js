import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import { GET_FOLLOWS_BY_USER, GET_FOLLOWERS_BY_USER } from './graphql'
import FollowTable from '../../components/FollowTable'
import FollowTable2 from '../../components/FollowTable2'
import Search from '../../components/Search v1'
import UserSearch from '../../components/Search v2'
import { useHistory } from 'react-router-dom'


const ID = "d74c2b6e-ae25-4153-991f-1fa44fdff81e"

const FollowTableP1 = () => {
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
    const history = useHistory()
    const token = localStorage.getItem('token')
    if(!token){
        history.push('/login')
    }
    return (
        <Container>
            <UserSearch header="User Search" subHeader="Search for the email of other users!" desc="e.g. example@example.com"/>
            <Search header="Book Search" subHeader="Search for books to recommend to those following you!" desc="e.g. Harry Potter or Charles Dickens"/>
            <FollowTableP1 />
            <FollowTableP2 />
        </Container>
    )
}

export default Follows
