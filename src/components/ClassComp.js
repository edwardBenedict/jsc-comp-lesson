import React from "react";

export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { student: "Yusuf", counter: 0 };
  }

  changeCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const { old, car } = this.props;
    return (
      <div>
        <h1>Welcome to ReactJS from CC</h1>
        <p>Age: {old}</p>
        <p>Age: {car}</p>
        <p>Student: {this.state.student}</p>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.changeCounter}>Increase</button>
      </div>
    );
  }
}
