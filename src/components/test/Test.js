import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    id: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          id: data.id
        })
      );
  }
  //   componentWillMount() {
  //     console.log("componentWillMount...");
  //   }
  //   componentDidUpdate() {
  //     console.log("componentDidUpdate...");
  //   }
  //   componentWillUpdate() {
  //     console.log("componentWillUpdate...");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("ComponentWillReceieveProps...");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return { test: "something" };
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("getSnapshotBeforeUpdate...");
  //   }

  render() {
    const { title, id } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{id}</p>
      </div>
    );
  }
}

export default Test;
