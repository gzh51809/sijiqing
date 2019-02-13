import React, { Component } from 'react';
import {Icon,Input,Carousel} from 'antd';
import Homenav from './homenav';
import Homeqiang from './homeqianggou';
// import axios from 'axios';
import '../../sass/header.scss';
class Home extends Component{
    constructor(){
        super();
        this.state = {
            userName:'',
            carouselpath:[{
                            path:'http://www.sjqhz.cn/data/afficheimg/1510011489336226440.jpg',
                            num:1
                        },{
                            path:'http://www.sjqhz.cn/data/afficheimg/1506619152577782492.jpg',
                            num:2
                        },{
                            path:'http://www.sjqhz.cn/data/afficheimg/1506619169176171227.jpg',
                            num:3
                        },{
                            path:'http://www.sjqhz.cn/data/afficheimg/1506619176507236772.jpg',
                            num:4
                        },
                    ],
            open: true
        }
    }
    // 生命周期
    componentDidMount(){

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
    onChange(a, b, c){
        console.log(a, b, c);
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
                <Carousel autoplay>
                    {
                        this.state.carouselpath.map(item => {
                            return  <div key={item.num}>
                                        <img src={item.path} data-id={item.num}/>
                                    </div>
                        })
                    }
                </Carousel>
                <Homenav></Homenav>
                <Homeqiang></Homeqiang>
            </div>
        )
    }
}

export default Home;