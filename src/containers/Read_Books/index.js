import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import { GET_READ_BOOKS_BY_USER } from './graphql'
import Read_BooksTable from '../../components/Read_BooksTable'
import { useHistory } from 'react-router-dom'
import LoadingComponent from '../../components/LoadingComponent'

const Read_Books = () => {
    const history = useHistory()
    const token = localStorage.getItem('token')
    if(!token){
        history.push('/login')
    }
    const ID = "4e50ba9f-9b4d-42f2-a8c0-e3d3c22c1050"
    const {loading, error, data} = useQuery(GET_READ_BOOKS_BY_USER, {
        variables: {userID: ID}})
    if (loading) 
    {
        return <LoadingComponent/>
    } else if (error)
    {
        return <Container><Text>Error!</Text></Container>
    }
    return (
        <Container>
            <Read_BooksTable data={data} />
        </Container>
    )
}

export default Read_Books
