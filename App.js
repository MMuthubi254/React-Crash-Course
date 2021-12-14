import React, {Component } from 'react';
//import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
//import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';


import './App.css';



class App extends Component{

  state = {
    todos: [
      {
        id: uuidv4(),  //uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuidv4(), //uuid.v4(),
        title: 'Dinner with wife',
        completed: true
      },
      {
        id:uuidv4(),  //uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }

  //Toggle Complete
markComplete = (id) => {
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id){
      todo.completed =!todo.completed
    }
    return todo;
  }) });
}

// Delete Todo
delTodo = (id) => {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id )]});
  
} 

//Add Todo
addTodo = (title ) => {
  const newTodo = {
    id: 4,
    title,
    completed:false
  }
  this.setState({todos:[...this.state.todos, newTodo]});


}

  render () {
        return (
        //<Router>
          <div className="App">
            <div className="container">
            <Header />
            {/* <Route path = "/" render= {props => (
              <React.Fragment>
                
              </React.Fragment>
            )} /> */}
            <AddTodo AddTodo={this.addTodo} />
                <Todos todos ={this.state.todos} markComplete = 
                {this.markComplete} delTodo={this.delTodo} />
            </div>        
          </div>
      //</Router>
    );
  }
}
export default App;
