import React from 'react'
import { Menu, Icon } from "antd";

const MenuStyle = {
  width: "60%",
  margin: "auto",
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  backgroundColor: "#FFFFFF",
  fontSize: "1rem",
  display: "flex",
  justifyContent: "space-around"
};

class Header extends React.Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <>
        <Menu
          style={MenuStyle}
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <Icon type="home" />
            Home
          </Menu.Item>

          <Menu.Item key="about"><Icon type="user" />About</Menu.Item>
          <Menu.Item key="myworks">My works</Menu.Item>
          <Menu.Item key="contact"><Icon type="message" />Contact</Menu.Item>
        </Menu>
      </>
    );
  }
}

export default Header