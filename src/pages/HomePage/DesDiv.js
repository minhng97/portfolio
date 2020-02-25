import React from "react";
import { Row, Col, Typography  } from 'antd';
import Rectangle from './Rectangle'
const { Title } = Typography;

const H2_STYLE = {
  padding: "6px",
  width: "auto",
  maxWidth: "300px",
  color: "rgba(0, 0, 0, 0.91)",
  marginTop: "10px",
  background: "#ffffff",
  borderRadius: "8px",
}
const words = "Welcome to my site"
class DesDiv extends React.Component {
  render() {
    return (
      <>
    <Row style={{marginTop: "24px"}}>
      <Col span={12} offset={4}>
     <Rectangle word={words} />
     </Col>
    </Row>
      <Row style={{}}>
      <Col span={12} offset={4}>
     <Title level={2} style={H2_STYLE}>A simple site built with love</Title>
     <span>minimalism, simple and elegant </span>
    </Col>
    </Row>
    </>
    )
  }
}
export default DesDiv
