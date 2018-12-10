import React, { Component } from 'react';

import './App.css';
import Validation from './Validation/Validation.js';
import './CharComp/CharComp.css';
import CharComp from './CharComp/CharComp';

class App extends Component {
    
     state={
         result:"putti",
         len:0,
        component:[]
      }
     
     changeHandler=(event)=>{
          this.setState({
            result:event.target.value,
            len: event.target.value.length,
            component:event.target.value.split('')
         })
         
         
         
     }
     
    removeEl=(index)=>{
        let component=this.state.component;
        component.splice(index,1);
          
        this.setState({
           component:component
        })
         
    }
     
     
     
    
  render() {
            
    return (
      <div className="App">
       <input type='text' onChange={this.changeHandler} />
        
        <p>length is {this.state.len}</p>
        <Validation l={this.state.len} />
        <div>
        {
     this.state.component.map((comp,index)=> <CharComp ch={comp} val={this.removeEl.bind(this,index)}/>  
     
     )
        }
        </div>
        
      </div>
    );
  }
}

export default App;
