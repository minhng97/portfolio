import React, { Component } from 'react';

import {Card, Icon} from 'antd'
class Contact extends Component {
    render() {
        return (
            <>
                <Card style={{marginTop: "40px", textAlign: "center"}}>
            
                <p style={{fontSize: "2rem"}}>
            Send me a message at:
                </p>
                <p  style={{fontSize: "1.4rem"}}>
                <Icon type="mail" theme="twoTone" /> <span style={{color: "#3f00ffc7", fontWeight: "bold"}}>minh.nineseven@gmail.com</span>
                </p>
            
            </Card>
            </>
        );
    }
}

export default Contact;