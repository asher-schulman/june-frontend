import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import AboutPage from './Components/AboutPage'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Container>
        <Switch>
          <Route path='/june-frontend/login' component={LoginPage} />
          <Route path='/june-frontend/about' component={AboutPage} />
          <Route exact path='/june-frontend' component={HomePage} />
        </Switch>
      </Container>
      <div className="weatherwidget"></div>
      <Footer />
    </div>
  );
}

export default App;
