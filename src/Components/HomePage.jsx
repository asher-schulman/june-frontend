import React from 'react'
import { Container, Row } from 'react-bootstrap'
import WeatherInput from './WeatherInput'

function HomePage() {

    return (
        <Container >
            <Row className="text-center my-2">
                <h1>June</h1>
                <h3>a weather app for dog lovers.</h3>
            </Row>
            < WeatherInput />
        </Container>
    )
}

export default HomePage
