import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto';
import { Drawer, AppBar } from './components';
import Box from '@material-ui/core/Box';
import { Switch, Redirect, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { useScreenType } from './components/common/useScreenType';



function App() {

  const screenType = useScreenType();
  let middle = null;
  let appbar = null;
  if(screenType === "big" || screenType === "med"){
    middle = (
      <>
        <Drawer></Drawer>
        
      </>
    ) 
  }
  if(screenType === "sml"){
    appbar = (
      <>
        <AppBar></AppBar>
      </>
    )
  }


  return (
    <div className="App">
      <Router>
        {appbar}
        <Box display="flex" flexDirection="row">
          {middle}
          <div>
            <Switch>
              <Route exact path ="/">
                <h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1>
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
              <Route path="/404">
                <h1> 404 not Found </h1>
              </Route>
              <Redirect to="/404"/>
            </Switch>
          </div>
        </Box>
      </Router>
        
    </div>
  );
}

export default App;
