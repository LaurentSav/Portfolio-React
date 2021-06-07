
import './App.css';
import '@fontsource/roboto';
import { Drawer, AppBar } from './components';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router } from 'react-router-dom';
import { useScreenType } from './components/common/useScreenType';
import {Routes} from './routes/routes'

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
          <div style={{height: "100%", width: "100%"}}>
            <Routes></Routes>
            
          </div>
        </Box>
      </Router>
        
    </div>
  );
}

export default App;
