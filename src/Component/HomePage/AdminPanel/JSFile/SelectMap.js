import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import Container from '@material-ui/core/Container';
import Toast from 'light-toast';
import { properties } from '../../../../Properties.js';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Map from './Map.js'


export default class SelectMap extends Component {
    constructor(props){
  super(props);
  this.state={
    setect:false,
    view:'',
    searchResult:[],
          
          
    };

}
handleChange=(event)=>{
  
  console.log(event.target.value)
  this.setState({view:'None'})

if(event.target.value!='None')
{
  this.setState({setect:true})
  Toast.loading("Fetching"+" "+event.target.value+" "+" Header");
          setTimeout(() => {
            Toast.hide();
          }, 4000);
     const proxyurl = "https://cors-anywhere.herokuapp.com/";
     const endUrl=properties.endUrl
    const baseuri=endUrl+'api/v1/'+event.target.value+'detail?';
    


    var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer "+" "+localStorage.getItem('dataToken'));

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(proxyurl+baseuri, requestOptions)
    .then(response => response.json())
    .then(result => {
      var list=[]
     result.result.slice(0,1).map(data=>(
                        
                        Object.entries(data).map(([make, type]) => (
                           list.push(make)    
                        ))

                       ))
     this.setState({searchResult:list})
      
  })
    .catch(error => console.log('error', error));
}
else{
  this.setState({setect:false})
}


}
handleViewChange=(event)=>{
  this.setState({view:event.target.value})
}

    
   
 
 View(params){
  switch(params){
    case 'None':
       return null;
    case 'Map':
        return(<Map searchResult={this.state.searchResult}/>);
  }
 }

    

    
     

  render() {
      

        



        return (
        <Container component="main" maxWidth="md">
        <div style={{display:'flex'}}>
        <div >
        <Typography >
          Select one transaction
        </Typography>
        <FormControl size='small' >
        <NativeSelect
          
          onChange={this.handleChange}
          
        >
          <option >None</option>
          <option >stock</option>
          <option >sales</option>
          
        </NativeSelect>
      </FormControl>
      </div>
      {this.state.setect?<div style={{marginLeft:'10%'}}>
      <Typography >
              What do you want to set?
            </Typography>
          <FormControl  size='small'>
            
            <NativeSelect
              value={this.state.view}
              onChange={this.handleViewChange}
              inputProps={{
                name: 'age',
                id: 'age-native-label-placeholder',
              }}
            >
              <option >None</option>
              <option >Map</option>
              <option >FTP</option>
              
            </NativeSelect>
          </FormControl>
          </div>:null}
      </div>
      {this.View(this.state.view)}
        
       
            </Container>
        );
    }
}