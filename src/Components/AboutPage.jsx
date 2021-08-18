import React from 'react'
import {Container} from 'react-bootstrap'
// import TestComponent from './TestComponent'

function AboutPage() {
    return (
        <Container className="my-3">
            <h1>Welcome to my weather app!</h1>
            <p>This app was made as a project for General Assembly's SEI bootcamp. It utilizes current weather data from openweathermap's free API. Built with React and Bootstrap on the frontend and a nodeJS/Express backend. Frontend hosted on netlify. Checkout the backend hosted on heroku at <a href="http://localhost:5000/api">backend url here</a>!</p>
            {/* <TestComponent/> */}
        </Container>
    )
}

export default AboutPage
