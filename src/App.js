import React from 'react'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {/* {this.props.children} */}
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