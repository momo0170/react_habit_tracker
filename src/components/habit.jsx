import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  // component가 업데이트 될 때마다 호출해주는 함수, render 함수가 호출될 때마다 이 함수가 호출된다.
  // 즉 이 함수도 같이 호출이 됨으로써 불필요한 일들이 수행될 수가 있다.
  componentDidUpdate() {
    // 유튜브의 데이터를 받아옴, 무거운 일
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    console.log(`habit: ${this.props.habit.name}`);
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
