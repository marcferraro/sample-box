import React, { useEffect }  from 'react';
import { useSelector, connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Login'
import SampleContainer from './components/SampleContainer'
import SampleForm from './components/SampleForm'
import Sample from './components/Sample'
import SampleEdit from './components/SampleEdit'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { loginSuccess } from './actions'
// import { connect } from 'react-redux';
// import { purple } from '@material-ui/core/colors';
// import Button from '@material-ui/core/Button';

function App(props){

  const auth = useSelector(state => state.auth)

  // handleFiles = (event) => {
  //     let files = event.target.files;
  //     console.log(files[0])
  //     // $("#src").attr("src", URL.createObjectURL(files[0]));
  //     document.querySelector('source').src = URL.createObjectURL(files[0])
  //     document.getElementById("audio").load();
  // }

  useEffect(() => {
    if(!auth){
      const reqObj = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
          },
        body: JSON.stringify({username: 'marcus'})
      }

      fetch('http://localhost:3000/login', reqObj)
      .then(resp => resp.json())
      .then(user => {
          if (user.error){
              alert(user.error)
          } else {
              // localStorage.setItem('username', user.username)
              props.loginSuccess(user)
              props.history.push('/samples')
              // setUsername("")
          }
      })
    }
  })

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
            <Route path='/samples' component={SampleContainer}/>
            <Route path='/sample-form' component={SampleForm}/>
            <Route path={`/sample/edit/:id`} component={SampleEdit}/>
            <Route path={`/sample/:id`} component={Sample}/>

          </Switch>
        </div>
      </ThemeProvider>
    );
}

const mapDispatchToProps = {
  loginSuccess: loginSuccess
}

// const mapStateToProps = state => {
//   return{
//     sampleId: state.sample
//   }
// }

export default connect(null, mapDispatchToProps)(withRouter(App))

/* <input onChange={this.handleFiles} type="file" id="upload" />
      <audio id="audio" controls>
        <source src="" id="src" />
      </audio> */