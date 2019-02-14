import React, { Component } from 'react';
class Homediscount extends Component{
    constructor(){
        super();
        this.state = {
            discountshop:[
                {
                    "id": "48609",
                    "shop_logo": "http://www.sjqhz.cn/data/store_street/brand_thumb/1540927503325703922.jpg",
                    "shop_name": "0790",
                    "shop_desc": "专营时尚女装"
                },
                {
                    "id": "48668",
                    "shop_logo": "http://www.sjqhz.cn/data/store_street/brand_thumb/1540927560697456029.jpg",
                    "shop_name": "3F191",
                    "shop_desc": "不负时光 魅力随性"
                },
                {
                    "id": "49145",
                    "shop_logo": "http://www.sjqhz.cn/data/store_street/brand_thumb/1540927927778695190.jpg",
                    "shop_name": "3F176",
                    "shop_desc": "自然自我，意趣生活"
                },
                {
                    "id": "30743",
                    "shop_logo": "http://www.sjqhz.cn/data/store_street/brand_thumb/1540927628959432339.jpg",
                    "shop_name": "0746",
                    "shop_desc": "温暖囤货，福利当先"
                },
                {
                    "id": "57416",
                    "shop_logo": "http://www.sjqhz.cn/data/store_street/brand_thumb/1540927866586354018.jpg",
                    "shop_name": "3F181",
                    "shop_desc": "解锁潮流，模范穿搭"
                },
                {
                    "id": "25881",
                    "shop_logo": "http://www.sjqhz.cn/data/store_street/brand_thumb/1540928367801682822.jpg",
                    "shop_name": "3F158",
                    "shop_desc": "天使魅力，时尚女装"
                }
            ]
        }
        
    }

    render(){
        return (
                <div className="Homediscount">
                    <div className="starrecommend">
                        <span className="recommend">名店推荐</span>
                        <a href="javascript:;" className="moreto">更多></a>
                    </div>
                    <ul className="discount-list">
                        {
                            this.state.discountshop.map(item=>{
                                return  <li key={item.id} data-id={item.id}>
                                            <div className="discountImg">
                                                <img src={item.shop_logo}/>
                                            </div>
                                            <p className="discount-shop">
                                                <span className="discount-left"></span>
                                                <span className="discount-right">{item.shop_name}</span>
                                            </p>
                                        </li>
                            })
                        }
                        
                    </ul>
                </div>
        )
    }
}

export default Homediscount;