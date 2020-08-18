import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import '../CSSFile/Map.css';
import * as XLSX from 'xlsx';

export default class Map extends Component {
    constructor(props){
  super(props);
  this.state={
    
        tasks: [
            {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
            {name:"React", category:"wip", bgcolor:"pink"},
            {name:"Vue", category:"complete", bgcolor:"skyblue"}
          ],
          selectedFile: null,
          right:[],
          imported:false
    }
}

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }
    onFileChange = event => { 
        this.setState({imported:true})
        const scope = this
        
     
      // Update the state 
      var file = event.target.files[0];
   // input canceled, return
           if (!file) return;
           
           var FR = new FileReader();
           FR.onload = function(e) {
             var data = new Uint8Array(e.target.result);
             var workbook = XLSX.read(data, {type: 'array'});
             var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
             
             // header: 1 instructs xlsx to create an 'array of arrays'
              var result = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
              console.log(result[0])
              scope.setState({right:result})
             
             // data preview
             
           };
           FR.readAsArrayBuffer(file); 

          
             
    }

    fileData = () => { 
     
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose before Pressing the Upload button</h4> 
          </div> 
        ); 
      } 
    }; 
     

    render() {
        var tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <Paper key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                   
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </Paper>
            );
        });

        return (
        <div>
       <div style={{display:'flex',justifyContent:'flex-end'}}> <input type="file" onChange={this.onFileChange} /></div>
            <div className="App">
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    
                    { this.props.searchResult.slice(0,1).map(data=>(
                        <div className="left">
                        {Object.entries(data).map(([make, type]) => (
                           <Paper style={{overflow:'wrap',backgroundColor:'red'}}
                           onDragStart = {(e) => this.onDragStart(e, make)}
                            draggable
                           ><Typography>{make}</Typography></Paper>     
                        ))}
                        </div>

                       ))}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                    

                     
                     { this.state.imported ?this.state.right.slice(0,1).map(data=>(
                        <div className="left">
                        {Object.entries(data).map(([make, type]) => (
                           <Paper style={{overflow:'wrap',backgroundColor:'red'}}
                           onDragStart = {(e) => this.onDragStart(e, make)}
                            draggable
                           ><Typography>{type}</Typography></Paper>     
                        ))}
                        </div>

                       )):null}
                </div>


            </div>
            
            </div>
        );
    }
}