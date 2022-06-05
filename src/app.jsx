import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import './app.css';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Learning', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        const count = habit.count + 1;
        return { ...habit, count: count };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: habits });
  };

  totalCount = () => {
    const habits = this.state.habits.filter((item) => item.count > 0);
    return habits.length;
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits];
    const id = habits[habits.length - 1].id + 1;
    this.setState({ habits: [...habits, { id: id, name: name, count: 0 }] });
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  render() {
    console.log('App');
    return (
      <>
        <Navbar onCount={this.totalCount} />
        <Habits
          habit={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}
export default App;
