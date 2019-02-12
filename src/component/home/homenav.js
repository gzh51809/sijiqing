import React, { Component } from 'react';
// import {Icon,Input,Carousel} from 'antd';
// import axios from 'axios';
import '../../sass/homenav.scss';
class Homenav extends Component{
    constructor(){
        super();
        this.state = {
            userName:'',
            carouselpath:[
                            {
                                "image": "http://www.sjqhz.cn/data/shortcut/1509652724728471377.png",
                                "text": "网红推荐",
                                "url": ""
                            },
                            {
                                "image": "http://www.sjqhz.cn/data/shortcut/1509652735149832765.png",
                                "text": "明星同款",
                                "url": ""
                            },
                            {
                                "image": "http://www.sjqhz.cn/data/shortcut/1509652745232156728.png",
                                "text": "四季特卖",
                                "url": ""
                            },
                            {
                                "image": "http://www.sjqhz.cn/data/shortcut/1509652758536313786.png",
                                "text": "名店精选",
                                "url": ""
                            }
                        ],
            open: true
        }
    }
    // 生命周期
    componentDidMount(){

    }

    render(){
        return (
                <ul className="navtab">
                    {
                        this.state.carouselpath.map(item => {
                            return  <li className="navitem" key={item.text}>
                                        <div className="navimg">
                                            <i className="navicon">
                                                <img src={item.image}/>
                                            </i>
                                        </div>
                                        <p>{item.text}}</p>
                                    </li>
                        })
                    }
                    
                </ul>
        )
    }
}

export default Homenav;