import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import '../CSSFile/Map.css';
import * as XLSX from 'xlsx';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Toast from 'light-toast';
import { properties } from '../../../../Properties.js';

export default class Map extends Component {
    constructor(props){
  super(props);
  this.state={
    
          right:[],
          selectedFile: null,
          imported:false,
          searchResult:props.searchResult,
          matched:[],
          matchingStart:true
          
    };

}

    onDragStart = (ev, id) => {
       // console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev,cat) => {
      let final='';
     
      this.state.matched.map(data=>{
        let string= data.split(" ")[0].trim();
        if(string==cat)
        {
          final=cat;

        }
        
      })
      if(final=='')
      {
        ev.preventDefault();
      }

        


    }

    onDrop = (ev, cat) => {
      this.setState({matchingStart:false})
       let id = ev.dataTransfer.getData("id");
       console.log(cat);
       console.log(id)
       
       var List=this.state.matched
       List.push(cat+' '+'mapped as'+' '+id)
       this.setState({matched:List})

       var options=this.state.right

       let index = options.indexOf(id)
        options.splice(index, 1)
        this.setState({right:options})
       
       
    }
    onFileChange = event => { 
        this.setState({imported:true})
        const scope = this
        var list=[];
        
     
      // Update the state 
      var file = event.target.files[0];
   // input canceled, return
           if (!file) return;
           
           var FR = new FileReader();
           FR.onload = function(e) {
            scope.setState({matched:[]})
             var data = new Uint8Array(e.target.result);
             var workbook = XLSX.read(data, {type: 'array'});
             var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
             
             // header: 1 instructs xlsx to create an 'array of arrays'
              var result = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
              result.slice(0,1).map(data=>(
                        
                        Object.entries(data).map(([make, type]) => (
                           list.push(type)    
                        ))

                       ))
              scope.setState({right:list})
                          // data preview
             
           };
           FR.readAsArrayBuffer(file); 

          
             
    }
 onRemove=(event, val)=>{

  var options=this.state.matched

       let index = options.indexOf(val)
        options.splice(index, 1)
        this.setState({matched:options})

    let addInRight=val.split(" ")[3].trim();
    var pushForRight=this.state.right;
    pushForRight.push(addInRight);
    this.setState({right:pushForRight});
    



 }
 

    

    
     

    render() {
      console.log(this.state.searchResult)

        



        return (
        <Container component="main" maxWidth="md">
        
       <div style={{display:'flex',justifyContent:'flex-end'}}> <input type="file" onChange={this.onFileChange} /></div>
            <div className="App">
                <div className="wip"
                
                    >
                    <div className="left">
                     {this.state.searchResult.map(data=>(
                      <Paper style={{overflow:'wrap',backgroundColor:'red'}}
                      onDragOver={(e)=>this.onDragOver(e,data)}
                      onDrop={(e)=>{this.onDrop(e,data )}}
                        
                      ><Typography>
                      {data}</Typography></Paper>))}
                    </div>
                    
                </div>
                <div className="droppable"  > 
                <div className="left">
                {this.state.matchingStart?<h3>Here Mapped Parameter</h3>:null}
               {this.state.matched.map(match=>(
                  <Paper style={{overflow:'wrap',backgroundColor:'green',display:'flex',justifyContent:'space-between'}}>
                  <Typography style={{color:'white'}}>
                   {match}
                   
                  </Typography>
                  <button style={{color:'red',backgroundColor:'black'}} onClick={(e)=>{this.onRemove(e,match)}}>Remove</button>
                  </Paper>

                  ))}

                </div>                

                     
                     
                </div>
                <div className="droppable"  >  

                    <div className="left">

                        {this.state.imported? this.state.right.map(data=>(
                              <Paper style={{overflow:'wrap',backgroundColor:'red'}}
                                   onDragStart = {(e) => this.onDragStart(e, data)}
                                    draggable
                                   ><Typography>
                              {data}</Typography></Paper>)):null}

                    </div>

              </div>
            
            </div>
            </Container>
        );
    }
}