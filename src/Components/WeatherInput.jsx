import React, { useState } from 'react'
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap'
import { Google } from 'react-bootstrap-icons'

require("dotenv").config();
const apiKey = process.env.REACT_APP_API_KEY
            
function WeatherInput() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const googleLogin = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    }

    const searchOnEnter = evt => {
        // if key pressed is ENTER...
        if (evt.key === "Enter") {
            evt.preventDefault()
            console.log(`QUERY: ${query}`)
            // ideally, query is a 5-digit US zipcode
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query},us&units=imperial&appid=${apiKey}`)
            .then(res => res.json())
            .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
            });
        }
    }

    const search = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query},us&units=imperial&appid=${apiKey}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
        });
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <Container className="row justify-content-md-center">
            <Card className="text-center">
                <Card.Header>
                    <Form >
                        <Form.Group className="mb-3">
                            <Row>  
                                <Form.Label>Search via city name or 5-digit zip code</Form.Label>
                            
                                <Col>
                                    <Form.Control 
                                        type="text"
                                        className="search-bar"
                                        placeholder="Search..."
                                        onChange={ e => setQuery(e.target.value)}
                                        value={query}
                                        onKeyPress={searchOnEnter}
                                    />
                                </Col>
                                <Col>
                                    <Button className="my3" variant="outline-danger" onClick={search}>
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Card.Header>
                {/* if there is any api data, display the widget */}
                {(typeof weather.main != 'undefined') ? (
                <Card>
                <Card.Body>
                    <Card.Title>{weather.name}, {weather.sys.country}</Card.Title>
                    <Card.Text>{weather.weather[0].description}</Card.Text>
                    <Card.Text>Current Temp: {Math.round(weather.main.temp)}°F</Card.Text>
                    <Card.Text>Feels Like: {Math.round(weather.main.feels_like)}°F</Card.Text>
                    <Button onClick={googleLogin} variant="outline-danger">
                        <Google className="m-2"></Google>
                    </Button>
                    <Card.Text>Login with Google to save data to your profile</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{dateBuilder(new Date())}</Card.Footer>
                </Card>) : ("") }
            </Card>

            {(typeof weather.main != 'undefined') ? (
            <div>
                
            </div>) : ('') }

        </Container>    
    )
}

export default WeatherInput
