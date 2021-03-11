import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Login'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
// import { purple } from '@material-ui/core/colors';
// import Button from '@material-ui/core/Button';

export default function App(){

  // handleFiles = (event) => {
  //     let files = event.target.files;
  //     console.log(files[0])
  //     // $("#src").attr("src", URL.createObjectURL(files[0]));
  //     document.querySelector('source').src = URL.createObjectURL(files[0])
  //     document.getElementById("audio").load();
  // }

  const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#212121",
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

    return(
      <ThemeProvider theme={theme}>
        {/* <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button> */}
        <div className="App" >
          <Navbar />
          <Switch>
            <Route path='/login' component={Login}/>
          </Switch>
        </div>
      </ThemeProvider>
    );
}

/* <input onChange={this.handleFiles} type="file" id="upload" />
      <audio id="audio" controls>
        <source src="" id="src" />
      </audio> */