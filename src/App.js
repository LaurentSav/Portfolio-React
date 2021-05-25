import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto';
import { Drawer } from './components';
import Box from '@material-ui/core/Box';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { useScreenType } from './components/common/useScreenType';



function App() {

  const screenType = useScreenType();

  return (
    <div className="App">
      <Router>
        <Box display="flex" flexDirection="row">
          <Drawer></Drawer>
          <Switch>
            <Route exact path ="/">
              <h1>HOME</h1>
            </Route>
            <Route exact path = "/aboutme">
              <h1>ABOUT</h1>
            </Route>
            <Route exact path = "/skills">
              <h1>COMPETENCES</h1>
            </Route>
            <Route exact path = "/projects">
              <h1>PROJECTS</h1>
            </Route>
            <Route exact path = "/contact">
              <h1>CONTACT</h1>
            </Route>
          </Switch>
        </Box>
      </Router>
        
    </div>
  );
}

export default App;
