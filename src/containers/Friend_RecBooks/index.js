import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import { GET_FRIEND_BOOKS_BY_USER } from './graphql'
import Friend_RecBooksTable from '../../components/Friend_RecBooksTable'
import { useHistory } from 'react-router-dom'
import jwt_decode from "jwt-decode"
import LoadingComponent from '../../components/LoadingComponent'


const Friend_RecBooks = () => {
    const history = useHistory()
    let token = localStorage.getItem('token')
    if(!token){
        history.push('/login')
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxOTJkN2RlLTEyNDctNDc0OS1iMDU5LTllODM5ODk0ZDEyNiIsImlhdCI6MTY0Mjc4MTIyNH0.hzGDNwACQRazjeGc8g1mZooYS7_Bm_x45e2Ebv8BD6g'
    }
    const ID = jwt_decode(token).id
    const {loading, error, data} = useQuery(GET_FRIEND_BOOKS_BY_USER, {
        variables: {recipientID: ID}})
    if (loading) 
    {
        return <LoadingComponent/>
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
