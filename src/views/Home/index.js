import React from 'react'
import logo from '../../assets/imgs/logo.svg';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                <img src={logo}/>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            initDone: true
        })
    }
}

export default Home