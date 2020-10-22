//CUR COMPONENT
import Col from 'components/Grid/Col'
import Container from 'components/Grid/Container'
import Wrapper from 'components/Grid/Wrapper'
import React from 'react'



const Header:React.FC = () => {
  return (
    <header>
      <Container>
        <Wrapper>
          <Col>
            <p>HEADER</p>
          </Col>
        </Wrapper>
      </Container>
    </header>
  )
}

export default Header