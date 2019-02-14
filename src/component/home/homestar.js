import React, { Component } from 'react';
import Swiper from 'swiper';
class Homestar extends Component{
    constructor(){
        super();
        this.state = {
            starlistitem:[
                {
                    "id": "20674",
                    "goods_name": "2018秋冬新款气质翻领格子口袋大衣 3F176-WQL913",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20674_thumb_G_1540926399115.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20674_G_1540926399470.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20674_G_1540926399860.jpg"
                    },
                    "shop_price": "899.00",
                    "formated_shop_price": "￥989.00"
                },
                {
                    "id": "20669",
                    "goods_name": "2018秋冬新款时尚气质格子貂绒大衣 3F181-ZYC3689",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20669_thumb_G_1540925885513.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20669_G_1540925885696.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20669_G_1540925885958.jpg"
                    },
                    "shop_price": "389.00",
                    "formated_shop_price": "￥428.00"
                },
                {
                    "id": "20666",
                    "goods_name": "2018秋冬新款时尚气质貂绒外套 3F181-ZYC1803",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20666_thumb_G_1540925662412.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20666_G_1540925662923.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20666_G_1540925662806.jpg"
                    },
                    "shop_price": "239.00",
                    "formated_shop_price": "￥263.00"
                },
                {
                    "id": "20662",
                    "goods_name": "秋季新款袖子刺绣花朵毛衣 QL3F146A-8815",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20662_thumb_G_1540925116300.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20662_G_1540925116710.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20662_G_1540925116731.jpg"
                    },
                    "shop_price": "315.00",
                    "formated_shop_price": "￥347.00"
                },
                {
                    "id": "20646",
                    "goods_name": "2018WQL秋新款时尚花豹纹半身裙 QL3F188-7733",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20646_thumb_G_1540775780370.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20646_G_1540775780494.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20646_G_1540775780393.jpg"
                    },
                    "shop_price": "122.00",
                    "formated_shop_price": "￥135.00"
                },
                {
                    "id": "20643",
                    "goods_name": "2018秋冬新款时尚气质貂绒2件套 3F188-WQL9988",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20643_thumb_G_1540775532774.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20643_G_1540775532475.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20643_G_1540775532526.jpg"
                    },
                    "shop_price": "222.00",
                    "formated_shop_price": "￥245.00"
                },
                {
                    "id": "20642",
                    "goods_name": "2018WQL秋季新款时尚针织半身裙 QL3F191-9039",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20642_thumb_G_1540775266845.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20642_G_1540775266191.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20642_G_1540775266784.jpg"
                    },
                    "shop_price": "177.00",
                    "formated_shop_price": "￥195.00"
                },
                {
                    "id": "20636",
                    "goods_name": "2018WQL秋季新款格纹雪纺连衣裙 QL2F0790-18039",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20636_thumb_G_1540774625348.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20636_G_1540774625526.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20636_G_1540774625981.jpg"
                    },
                    "shop_price": "222.00",
                    "formated_shop_price": "￥245.00"
                },
                {
                    "id": "20635",
                    "goods_name": "2018WQL秋季新款小麻花针织上衣 QL2F0790-6005",
                    "img": {
                        "small": "http://www.sjqhz.cn/images/201810/thumb_img/20635_thumb_G_1540774559538.jpg",
                        "thumb": "http://www.sjqhz.cn/images/201810/goods_img/20635_G_1540774559929.jpg",
                        "url": "http://www.sjqhz.cn/images/201810/source_img/20635_G_1540774559265.jpg"
                    },
                    "shop_price": "160.00",
                    "formated_shop_price": "￥176.00"
                }
            ],
        }
        
    }

    componentWillMount(){
       setTimeout(() => {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            width:500,
            autoplay:true,
          });
       }, 1000);
    }
    render(){
        return (
                <div className="starModule">
                    <div className="starrecommend">
                        <span className="recommend">明星同款</span>
                        <a href="javascript:;" className="moreto">更多></a>
                    </div>
                    <div className="starcarousel">
                   

                        <div className="starlist">
                        <div className="swiper-container">
                        <div className="swiper-wrapper staritem">
                            {
                                this.state.starlistitem.map(item => {
                                    return  <div className="swiper-slide" key={item.id}>
                                                <div className="itemlist">
                                                    <img src={item.img.small} />
                                                    <p>{item.goods_name}</p>
                                                    <p>￥{item.shop_price}</p>
                                                </div>
                                            </div>;       
                                })
                            }
                        </div>
 
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Homestar;