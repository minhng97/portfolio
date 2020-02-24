import React from "react";

const RECT_STYLE = {
  width: "auto",
  maxWidth: "300px",
  height: "max-content",
  background: "rgba(51, 51, 50, 0.31)",
  borderRadius: "20px",
  color: "white",
  fontSize: "30px",
  padding: "6px"
};
class Rectangle extends React.Component {
  render() {
    return (
      <div style={RECT_STYLE}>
        <span>{this.props.word}</span>
      </div>
    );
  }
}

export default Rectangle;
