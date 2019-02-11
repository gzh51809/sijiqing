import React, { Component } from 'react';
import {Icon,Input} from 'antd';
import Moduletab from '../mainmodule';
import '../../sass/header.scss';
class Home extends Component{
    constructor(){
        super();
        this.state = {
            userName:''
        }
    }
    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
      }
    onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
    }
    onlinkto = () =>{
        console.log(123);
    }
    render(){
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <div>
                <ul className="headerapp">
                    <li className="header-left">
                        <a href="#">
                            <span>广州</span>
                            <Icon type="down" className="header-icon"/>
                        </a>
                    </li>
                    <li className="header-middle">
                        <a href="#">
                            <Input
                                placeholder="请输入您想要找的商品或商铺"
                                prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' ,fontSize:'20px'}} />}
                                suffix={suffix}
                                value={userName}
                                onChange={this.onChangeUserName}
                                ref={node => this.userNameInput = node}
                                onClick={this.onlinkto}
                            />
                        </a>
                    </li>
                    <li className="header-right">
                        <span>登录</span>
                    </li>
                </ul>
                <Moduletab props={this.props}></Moduletab>
            </div>
        )
    }
}

export default Home;