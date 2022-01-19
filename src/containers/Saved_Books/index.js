import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import { GET_SAVED_BOOKS_BY_USER } from './graphql'
import Saved_BooksTable from '../../components/Saved_BooksTable'

const Saved_Books = () => {
    const ID = "4e50ba9f-9b4d-42f2-a8c0-e3d3c22c1050"
    const {loading, error, data} = useQuery(GET_SAVED_BOOKS_BY_USER, {
        variables: {userID: ID}})
    if (loading) 
    {
        return <Container><Text>Loading...</Text></Container>
    } else if (error)
    {
        return <Container><Text>Error!</Text></Container>
    }
    return (
        <Container>
            <Saved_BooksTable data={data} />
        </Container>
    )
}

export default Saved_Books
