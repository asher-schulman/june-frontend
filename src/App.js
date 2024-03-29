import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <Router>
          <Route path='/login' component={LoginPage} />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/' component={HomePage} />
        </Router>
      </Container>
      <div className="weatherwidget"></div>
      <Footer />
    </div>
  );
}

export default App;
