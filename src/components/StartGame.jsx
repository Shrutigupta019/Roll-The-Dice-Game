import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src='./images/dices.png' alt="Dice Image" data-cy="dice-image"></img>
      </div>
      <div className='content'>
        <h1 data-cy="dice-game">Dice Game</h1>
        <Button onClick={toggle} data-cy="play-now">Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
max-width: 1180px;
height: 110vh;
display: flex;
margin: 0 auto;
align-items: center;
.content {
  h1{
    font-size: 96px;
    white-space: nowrap;
  }
}
`

