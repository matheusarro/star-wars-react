import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/atoms/Navigation';
import HomePage from './pages/HomePage';
import PeoplePage from './pages/PeoplePage';
import PlanetsPage from './pages/PlanetsPage';
import StarshipsPage from './pages/StarshipsPage';
import VehiclesPage from './pages/VehiclesPage';
import FilmsPage from './pages/FilmsPage';
import SpeciesPage from './pages/SpeciesPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  margin: auto;
  color: gold;
`;

const AppContainer = styled.div`
  overflow: auto;
  height: 100vh;
  width: 100vw;
  background-color: black;
  background-image: url('./img/background.jpg');
  background-size: cover;
`;

function App() {

  return (
      <Router>
        <AppContainer>
          <Container>

            <header>
              <Navigation />
            </header>

            <main>
              <Switch>
                <Route path='/people' component={PeoplePage} />
                <Route path='/planets' component={PlanetsPage} />
                <Route path='/starships' component={StarshipsPage} />
                <Route path='/vehicles' component={VehiclesPage} />
                <Route path='/films' component={FilmsPage} />
                <Route path='/species' component={SpeciesPage} />
                <Route path='/' component={HomePage} />
              </Switch>
            </main>

          </Container>
        </AppContainer>
      </Router>
  );
}

export default App;
