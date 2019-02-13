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
            <div className="navqiang">
                <div className="navqianggou">
                    <img src="http://www.sjq.cn/mojivue/static/images/active-reword-redbag.jpg"/>
                </div>
                <div className="redrecommend">
                    <span className="recommend">网红推荐</span>
                    <a href="javascript:;" className="moreto">更多></a>
                </div>
            </div>
        )
    }
}

export default Homeqiang;