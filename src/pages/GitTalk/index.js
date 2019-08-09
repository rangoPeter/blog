import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import React from 'react';
import {Card} from 'antd';

export default class Gitalks extends React.Component {

    componentDidMount(){
        const gitalk = new Gitalk({
            enable: true,
            clientID: 'a3830a2b79a2f68db90a',
            clientSecret: '2138827d6d1c2cb76164d7c3b334c2d26fcb0d69',
            repo: 'rangoPeter.github.io',
            owner: 'rangoPeter',
            admin: 'rangoPeter',
            id: this.props.path,
            distractionFreeMode: false
        })
        gitalk.render('gitalk-container')
    }

    render(){
        return(
            <Card
                style={{ width: '100%' ,marginTop:20}}
            >
            <div id='gitalk-container'></div>
            </Card>
        )
    }
}
