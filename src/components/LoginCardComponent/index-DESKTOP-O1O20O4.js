import React from 'react'
import { Background, Card, Container } from './styles'

const CardComponent = content => {
  return (
    <>
      <Background>
        <Container>
          <Card>
            {content.content}
          </Card>
        </Container>
      </Background>
    </>
  )
}

export default CardComponent
 