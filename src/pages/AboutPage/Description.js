import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';

class Description extends Component {
    render() {
        return (
            
            <div style={{ background: '#ECECEC', padding: '30px', textAlign: "center", marginTop: "50px" }}>
                <p style={{fontSize: "1.4rem"}}>What do I use when develop a site?</p>

                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Front-end:" bordered={false}>
                            <p>Framework: ReactJs</p>
                            <p> AntDesign, Bootstrap, React-Strap</p>
                            <p>HTML5, CSS3, JavaScript (ES6)</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Back-end" bordered={false}>
                            <p>NodeJs</p>
                            <p>Framework: ExpressJS</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Database" bordered={false}>
                            <p>MongoDB</p>
                            <p>  MongoDB, including Mongoose, MongoAtlas, Mongo3T</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Description;