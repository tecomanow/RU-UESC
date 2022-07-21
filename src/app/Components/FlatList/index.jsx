import "intersection-observer";
import React, { Component } from "react";
import { ScrollView } from "@cantonjs/react-scroll-view";

export default class App extends Component {
  handleEndReached = () => {
    console.log("load more");
  };

  render() {
    return (
      <ScrollView
        onEndReached={this.handleEndReached}
        style={{ height: "100vh" }}
      >
        <h1>React Scroll View</h1>
        <p>Awseome!</p>
      </ScrollView>
    );
  }
}
