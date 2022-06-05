import React, { Component } from 'react';
import Habit from './habit';
import InputHabitAdd from './inputHabitAdd';
import Reset from './reset';

class Habits extends Component {
  render() {
    console.log('habits');
    return (
      <ul>
        <InputHabitAdd habit={this.props.habit} onAdd={this.props.onAdd} />
        {this.props.habit.map((habit) => {
          return (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          );
        })}
        <Reset onReset={this.props.onReset} />
      </ul>
    );
  }
}

export default Habits;
