import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import { GET_FRIEND_BOOKS_BY_USER } from './graphql'
import Friend_RecBooksTable from '../../components/Friend_RecBooksTable'
import { useHistory } from 'react-router-dom'

const Friend_RecBooks = () => {
    const history = useHistory()
    const token = localStorage.getItem('token')
    if(!token){
        history.push('/login')
    }
    const ID = "22b8acfb-3300-4632-84bc-aa66e76cbdd7"
    const {loading, error, data} = useQuery(GET_FRIEND_BOOKS_BY_USER, {
        variables: {recipientID: ID}})
    if (loading) 
    {
        return <Container><Text>Loading...</Text></Container>
    } else if (error)
    {
        return <Container><Text>Error!</Text></Container>
    }
    return (
        <Container>
            <Friend_RecBooksTable data={data} />
        </Container>
    )
}

export default Friend_RecBooks
