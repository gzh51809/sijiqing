import React, { Component } from 'react';
class Homeseasons extends Component{
    constructor(){
        super();
        this.state = {
            seasonslist:[
                {
                    "id": "20671",
                    "goods_name": "秋冬时尚短款毛呢外套 QL3F176-726",
                    "shop_name": "3F176",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20671_thumb_G_1540926224691.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20671_G_1540926224493.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20671_G_1540926224425.jpg"
                    },
                    "shop_price": "75.00",
                    "formated_shop_price": "￥87.00"
                },
                {
                    "id": "20661",
                    "goods_name": "2018WQL时尚秋季新款天鹅毛衣 QL3F146A-8815",
                    "shop_name": "3F146A",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20661_thumb_G_1540925039461.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20661_G_1540925039522.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20661_G_1540925039404.jpg"
                    },
                    "shop_price": "55.00",
                    "formated_shop_price": "￥64.00"
                },
                {
                    "id": "20660",
                    "goods_name": "2018WQL秋季新款时尚袖口绑带纯色毛衣 QL3F146A-1N10",
                    "shop_name": "3F146A",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20660_thumb_G_1540924957890.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20660_G_1540924957258.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20660_G_1540924957571.jpg"
                    },
                    "shop_price": "66.00",
                    "formated_shop_price": "￥76.00"
                },
                {
                    "id": "20659",
                    "goods_name": "2018WQL秋季新款麻花毛衣 QL3F146A-7N16",
                    "shop_name": "3F146A",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20659_thumb_G_1540924878558.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20659_G_1540924878029.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20659_G_1540924878380.jpg"
                    },
                    "shop_price": "70.00",
                    "formated_shop_price": "￥81.00"
                },
                {
                    "id": "20658",
                    "goods_name": "2018新款V领坑条显瘦开衫 2F0746-ZYC0746-1",
                    "shop_name": "0746",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20658_thumb_G_1540924516252.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20658_G_1540924516890.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20658_G_1540924516273.jpg"
                    },
                    "shop_price": "65.00",
                    "formated_shop_price": "￥75.00"
                },
                {
                    "id": "20657",
                    "goods_name": "2018新款韩版气质百搭毛衣 2F0746-ZYC785",
                    "shop_name": "0746",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20657_thumb_G_1540924461898.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20657_G_1540924461566.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20657_G_1540924461911.jpg"
                    },
                    "shop_price": "59.00",
                    "formated_shop_price": "￥68.00"
                }
            ]
        }
    }
    // 生命周期
    componentDidMount(){

    }

    render(){
        return (
            <div className="seasons">
                <div className="starrecommend">
                        <span className="recommend">四季特卖</span>
                        <a href="javascript:;" className="moreto">更多></a>
                </div>
                <ul className="clearfix">
                    {
                        this.state.seasonslist.map(item =>{
                            return  <li className="listitem" key={item.id} data-id={item.id}>
                                        <div className="listImg">
                                            <img src={item.img.small}/>
                                        </div>
                                        <div className="goodlist">
                                            <p className="itemName">{item.goods_name}</p>
                                            <p className="itemPirce">
                                                <span className="pirce">￥{item.shop_price}</span></p>
                                        </div>
                                    </li>
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}

export default Homeseasons;