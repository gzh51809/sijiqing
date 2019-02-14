import React, { Component } from 'react';
import {Carousel} from 'antd';
import Swiper from 'swiper';
class Homebottom extends Component{
    constructor(){
        super();
        this.state = {
            market:[
                {
                    "id": "28",
                    "belong": "hz",
                    "name": "四季青老市场",
                    "image": "http://www.sjqhz.cn/data/yunmarket/1502158465522310780.png"
                },
                {
                    "id": "43",
                    "belong": "hz",
                    "name": "周边市场",
                    "image": "http://www.sjqhz.cn/data/yunmarket/1502160563507787869.png"
                },
                {
                    "id": "32",
                    "belong": "hz",
                    "name": "四季青南区",
                    "image": "http://www.sjqhz.cn/data/yunmarket/1502158453769715710.png"
                },
                {
                    "id": "30",
                    "belong": "hz",
                    "name": "四季青东大楼",
                    "image": "http://www.sjqhz.cn/data/yunmarket/1502158476778486815.png"
                },
                {
                    "id": "31",
                    "belong": "hz",
                    "name": "九堡大市场",
                    "image": "http://www.sjqhz.cn/data/yunmarket/1502158444932948081.png"
                }
            ]
        }
        
    }
    
    render(){
        return (
                <div className="Homebottom">
                    <div className="starrecommend">
                        <span className="recommend">名店推荐</span>
                        <a href="javascript:;" className="moreto">更多></a>
                    </div>
                    <Carousel autoplay>
                        {
                            this.state.market.map(item => {
                                return  <div key={item.id}>
                                            <img src={item.image} data-id={item.id}/>
                                            <p className="aa">
                                                {item.name}
                                            </p>
                                        </div>
                            })
                        }
                    </Carousel>
                 
                </div>
        )
    }
}

export default Homebottom;