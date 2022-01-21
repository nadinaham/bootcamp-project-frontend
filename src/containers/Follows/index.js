import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import { GET_FOLLOWS_BY_USER, GET_FOLLOWERS_BY_USER } from './graphql'
import FollowTable from '../../components/FollowTable'
import FollowTable2 from '../../components/FollowTable2'
import Search from '../../components/Search v1'
import UserSearch from '../../components/Search v2'
import { useHistory } from 'react-router-dom'
import NavComponent from '../../components/NavComponent'
import CardComponent from '../../components/CardComponent'

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
    const content1 = (
        <>
            <UserSearch header="User Search" subHeader="Search for the email of other users!" desc="e.g. example@example.com"/>
            <FollowTableP1 />
        </>
    )
    const content2 = (
        <>
            <Search header="Book Search" subHeader="Search for books to recommend to those following you!" desc="e.g. Harry Potter or Charles Dickens"/>
            <FollowTableP2 />
        </>
    )
    return (
        <> 
            <NavComponent/>
            <CardComponent content = {content1} />
            <CardComponent content = {content2} />
        </>
    )
}

export default Follows
