import React, { Component } from 'react';
class Homeqiang extends Component{
    constructor(){
        super();
        this.state = {
            userName:''
        }
    }
    // 生命周期
    componentDidMount(){

    }

    render(){
        return (
            <div className="navqianggou">
                <img src="http://www.sjq.cn/mojivue/static/images/active-reword-redbag.jpg"/>
            </div>
        )
    }
}

export default Homeqiang;