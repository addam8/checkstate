
import React, { useState } from 'react';
import Timer from './Timer'


class App extends React.Component{
  constructor(){
  super()
   this.state={
    Fullname:"Addem Bedoui",
    Bio:"bacchelor degree student at GoMyCode",
    Profession:"working at coffeshop and laser game TAG'S",
    Show: false,
    
   }
   
}
button = () =>{

  this.setState({Show:!this.state.Show})
}


  render(){
  return (
    <div className='App'>
         <button onClick={this.button}>
        {this.state.Show ? "Hide profil" : "Show profil"}
      </button>
         {this.state.Show ?
        (<><p>{this.state.Fullname}</p>
        <p>{this.state.Bio}</p>
        <p>{this.state.Profession}</p>
        <Timer/> </>) : null
        }
      </div>)
    }}


  
export default App;
