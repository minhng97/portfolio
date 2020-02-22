import React from 'react'
import { Link } from 'react-router-dom'
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

class HeaderComponent extends React.Component {
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
          <Menu.Item
            key="mail"
          >
            <Link to="/">
              <Icon type="home" />
              Home
            </Link>
          </Menu.Item>

          <Menu.Item
            key="about">
            <Link to="/about">
              <Icon type="user" />About</Link>
          </Menu.Item>

          <Menu.Item
            key="myworks">
            <Link to="/myworks">
              My works
            </Link>
          </Menu.Item>

          <Menu.Item
            key="contact">
            <Link to="/contact">
              <Icon type="message" />Contact
            </Link>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default HeaderComponent