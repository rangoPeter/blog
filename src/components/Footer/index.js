import React from 'react';
import './index.less';
import {Row} from 'antd';


export default class Footer extends React.Component{

    render(){
        return(
            <Row className='footer'>
                <span>Created ©2018 rangopeter 闽ICP备18019123号</span>
            </Row>
        );
    }
}
