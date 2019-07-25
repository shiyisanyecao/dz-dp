import React from 'react'
import '../../assets/style/common.css'
import './index.css'
import xiala from '../../assets/imgs/xiala.png'
import sousuo from '../../assets/imgs/sousuo.png'
import yonghu from '../../assets/imgs/yonghu.png'


import { Input } from 'element-react';
import 'element-theme-default';

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div className="header-box">
                <div className="position">
                    深圳
                    <img src={xiala} alt=""/>
                </div>
                <div className="search">
                    <img src={sousuo} alt=""/>
                    <Input/>
                </div>
                <div className="user">
                    <img src={yonghu} alt=""/>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            initDone: true
        })
    }
}

export default HomeHeader