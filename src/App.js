import React from 'react'
import './App.css'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            // <div>
            //     {/* {this.props.children} */}
            // </div>
            <div className="App">
                hello vw-layout
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            initDone: true
        })
    }
}

export default App