import React, { Component } from 'react'
import Todos from './components/Todos'

import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the Trash',
        completed: false
      },
      {
        id: 2,
        title: 'Make Dinner',
        completed: true
      },
      {
        id: 3,
        title: 'Feed the Dog',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App
