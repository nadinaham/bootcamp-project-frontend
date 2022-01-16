import React from 'react'
import { Card, Container } from './styles'

const CardComponent = (content) => {
    return(
    <>
    <Container>
        <Card>
            {content.content}
        </Card>
    </Container>

    </>
    )
}

export default CardComponent
