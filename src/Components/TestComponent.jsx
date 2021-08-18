import React, { useState } from 'react';

function TestComponent() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const searchOnEnter = evt => {
        // if key pressed is ENTER...
        if (evt.key === "Enter") {
            evt.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=d8fda636cb52cbfbb3fc3cc88bc83df8`)
            .then(res => res.json())
            .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
            });
        }
    }

    const search = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=d8fda636cb52cbfbb3fc3cc88bc83df8`)
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
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
        <main>
            <div className="search-box">
                <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={searchOnEnter}
                />
                <button onClick={search}>Search</button>
            </div>


            {/* <form id="myform" method="get" action="something.php">
                <input type="text" name="name" />
            </form>

            <input type="submit" form="myform" /> */}


            {(typeof weather.main != "undefined") ? (
            <div>
            <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                {Math.round(weather.main.temp)}°F
                </div>
                <div className="weather">{weather.weather[0].main}</div>
            </div>
            </div>
            ) : ('')}
        </main>
        </div>
    );
    }

export default TestComponent;
