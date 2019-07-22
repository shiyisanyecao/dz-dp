import React from 'react'
import '../../assets/style/common.css'
import './index.css'
import xiala from '../../assets/imgs/xiala.png'
import sousuo from '../../assets/imgs/sousuo.png'
import yonghu from '../../assets/imgs/yonghu.png'


class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div className="clear-fix header-box">
                <div className="float-left position">
                    深圳
                    <img src={xiala} alt="ps"/>
                </div>
                <div className="float-right user">
                    <img src={yonghu} alt="ps"/>
                </div>
                <div className="search">
                    <img src={sousuo} alt="ps"/>
                    <input/>
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