import React from 'react'
import './Game.css'
import Card from '../../components/Card/Card'
import { Container, Row, Col } from 'react-bootstrap';

const Game = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Card link="/Hunt" name="Kelime Avı" img="/img/av.png" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Card link="/error" name="Eşleştirme" img="/img/eslestirme.jpg" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Card link="/error" name="Bulmaca" img="/img/bulmaca.jpg" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Card link="/error" name="Senarist" img="/img/senaryo.png" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Game