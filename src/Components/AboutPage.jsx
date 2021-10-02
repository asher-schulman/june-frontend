import React from 'react'
import {Container} from 'react-bootstrap'
// import TestComponent from './TestComponent'

function AboutPage() {
    return (
        <Container className="my-3">
            <h1>Welcome to my weather app!</h1>
            <p>This app was made as a project for General Assembly's SEI bootcamp. It utilizes current weather data from openweathermap's free API. Built with React and Bootstrap on the frontend and a nodeJS/Express backend. Both backend and frontend hosted on heroku. With a MongoDB Atlas Cluster running the databse for eventual CRUD operations. Checkout the <a href="https://june-backend.herokuapp.com//api">backend api</a> I created for this app. </p>
            {/* <TestComponent/> */}
        </Container>
    )
}

export default AboutPage
