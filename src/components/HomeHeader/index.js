import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from '../../store';
import { getInputChangeAction, getAddTodoItemAction, getDeleteTodoAction } from '../../store/actionCreators.js'


// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
//   ];

class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        console.log(this);
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <div style={{marginTop:'10px', marginLeft:'10px'}}>
                <div>
                    <Input 
                        value={this.state.inputVaule} 
                        placeholder="input content" 
                        style={{width:'300px', marginRight:'10px'}}
                        onChange = {this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
                </div>
                <List
                    style={{width: '300px',marginTop:'10px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => <List.Item onClick={this.handleDeleteItem.bind(this,index)}>{item}</List.Item>}
                />
            </div>
        )
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleButtonClick() {
        const action = getAddTodoItemAction();
        store.dispatch(action);
    }
    handleDeleteItem(i) {
        const action = getDeleteTodoAction(i);
        store.dispatch(action);
    }
}

export default HomeHeader