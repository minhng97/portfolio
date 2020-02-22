import React from "react";
import { Row, Col, Typography  } from 'antd';
import Rectangle from './Rectangle'
const { Title } = Typography;
const DES_STYLE = {
  padding: "10px",
};
const H2_STYLE = {
  color: "#402424",
  marginTop: "10px"
}
const words = "Welcome to my site"
class DesDiv extends React.Component {
  render() {
    return (
      <>
    <Row style={{marginTop: "50px"}}>
      <Col span={12} offset={3}>
     <Rectangle word={words} />
     </Col>
    </Row>
      <Row style={{}}>
      <Col span={12} offset={5}>
     <Title level={2} style={H2_STYLE}>A simple site built with love</Title>
     {/* <span>minimalism, simple and elegant </span> */}
    </Col>
    </Row>
    </>
    )
  }
}
export default DesDiv