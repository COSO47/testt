import { React, Component } from "react";
class ChatCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: new Date() };
  }

  render() {
    return <div>this.state.data</div>;
  }
}
