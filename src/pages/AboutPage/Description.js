import React, { Component } from 'react';
import { Row, Col  } from 'antd';

class Description extends Component {
    render() {
        return (
            <>
                <div style={{margin: "auto"}}>
                <h3>What do I use when develop a site?</h3>
                <div>
                    <Row>
                        <Col xs="24" md="8">
                            <p>
                                Front-end:
                            </p>
                            <div>
                                <p>
                                   Framework: ReactJs, AntDesign, Bootstrap, React-Strap
                                </p>
                                <p>
                                    HTML5, CSS3, JavaScript (ES6) 
                                </p>

                            </div>
                        </Col>

                        <Col xs="24" md="8">
                            <p>
                                Back-end:
                            </p>
                            <div>
                                <p>
                                    NodeJs
                                </p>
                            </div>
                        </Col>

                        
                        <Col xs="24" md="8">
                            <p>
                                Database:
                            </p>
                            <div>
                                <p>
                                    MongoDB, including Mongoose, MongoAtlas, Mongo3T
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                </div>
            </>
        );
    }
}

export default Description;