import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';


class MyWorks extends Component {
    render() {
        return (
            <>
            <div style={{ background: '#ECECEC', padding: '30px', textAlign: "center", marginTop: "3rem" }}>
            <p style={{fontSize: "1.4rem"}}>Some of my projects</p>

            <Row gutter={16}>
                <Col md={8} xs={24} offset={8}>
                    <Card title="Todos List" bordered={false}>
                       <a href="https://inm6w.csb.app/" target="_blank" rel="noopener noreferrer">
                       <img src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e4e4c125785500009e1676b/screenshot.png" alt="alt" 
                       style={{maxWidth: "200px"}}
                       />
                       </a>
                    </Card>
                </Col>
                
            </Row>
        </div>
        </>
        );
    }
}

export default MyWorks;