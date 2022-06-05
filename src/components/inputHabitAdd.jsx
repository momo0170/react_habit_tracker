import React, { PureComponent } from 'react';

class InputHabitAdd extends PureComponent {
  inputRef = React.createRef();

  handleInput = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

  render() {
    console.log('InputhabitAdd');
    return (
      <form onSubmit={this.handleInput}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default InputHabitAdd;
