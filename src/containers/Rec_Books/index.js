import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import { GET_REC_BOOKS_BY_USER } from './graphql'
import Rec_BooksTable from '../../components/Rec_BooksTable'

const Rec_Books = () => {
    const ID = "4e50ba9f-9b4d-42f2-a8c0-e3d3c22c1050"
    const {loading, error, data} = useQuery(GET_REC_BOOKS_BY_USER, {
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
            <Rec_BooksTable data={data} />
        </Container>
    )
}

export default Rec_Books