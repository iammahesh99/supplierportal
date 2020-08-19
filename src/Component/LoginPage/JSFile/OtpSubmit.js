import React ,{Component}from "react";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {
  Route,
  Link, Redirect,  
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Toast from 'light-toast';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    marginTop: theme.spacing(28),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
});


class OtpSubmit extends Component {
constructor(props){
  super(props);
  this.state={
    otp:'',
    home:false,
    minutes: 3,
    seconds: 0,
    counter:true,
    otpfail:false
    
  }
 }
 handleOTP=(event)=>{
  this.setState({otp:event.target.value})


 }
 componentDidMount() {
  console.log(localStorage.getItem('token'))
  this.fetchData( localStorage.getItem('token'));
  this.myInterval = setInterval(() => {
    const { seconds, minutes } = this.state
    if (seconds > 0) {
      this.setState(({ seconds }) => ({
        seconds: seconds - 1
      }))
    }
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(this.myInterval)
      } else {
        this.setState(({ minutes }) => ({
          minutes: minutes - 1,
          seconds: 59,
          
        }))
      }
    }
  }, 1000)
  
  

 }
submit=()=>{
  this.setState({counter:false})
   const proxyurl = "https://cors-anywhere.herokuapp.com/";
   const baseuri ="http://ec2-3-23-104-101.us-east-2.compute.amazonaws.com/api/v1/otp/submit";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer "+" "+localStorage.getItem('token'));

  var raw = JSON.stringify({"otp":this.state.otp});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(proxyurl+baseuri, requestOptions)
    .then(response => {
          Toast.loading('submitting ');
          setTimeout(() => {
            Toast.hide();
            if(response.status==200)
                {
                  this.setState({home:true})
                  
                }
                else{
                  this.setState({otpfail:true})
                }           
          }, 2000);
    
    return response.json()})
    .then(result => {
      localStorage.setItem('dataToken',result.token);

    })
    .catch(error => console.log('error', error));

}

 fetchData(params){
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const baseuri ="http://ec2-3-23-104-101.us-east-2.compute.amazonaws.com/api/v1/otp/request";
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer "+" "+params);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(proxyurl+baseuri, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

 }
render()
 {
  const { classes}= this.props;
  const { minutes, seconds } = this.state
  
  
    return (
      <div >
<Container component="main" maxWidth="xs">
<div className={clsx(classes.paper)}>
         <form className={clsx(classes.form)} noValidate>
          <TextField
            
            required
            fullWidth
            variant="outlined"
            onBlur={this.handleOTP}
            margin="normal"
            label="OTP"
            type="password"
            id="password"
            autoComplete="current-password"
            
          />
          {this.state.counter?<div style={{display:'flex',justifyContent:'center'}}><Typography>Time Remaining: { minutes }:{ seconds }</Typography></div>:null}
           {this.state.otpfail?<div style={{display:'flex',justifyContent:'center'}}><Typography style={{color:'red'}}>Otp is wrong</Typography></div>:null}
          
          <Button
          
            fullWidth
            variant="contained"
            className={clsx(classes.submit)}
            style={{backgroundColor:'red'}}
            onClick={this.submit}
          >
            Submit
          </Button>
          
          
        </form>
     </div>
      </Container>

        


{this.state.home? <Redirect to="/HOME" /> : null}
         
 
      </div>
    );
  }
}

OtpSubmit.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(OtpSubmit);