import  React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import '../sass/mainmodule.scss';
class Moduletab extends Component {
    constructor(){
        super();
        this.state = {
            menu:[{
                text:'首页',
                path:'/home',
                name:'Home',
                icon:'shop'
            },{
                text:'分类',
                path:'/classfiy',
                name:'Classfiy',
                icon:'appstore'
            },{
                text:'购物车',
                path:'/shoppingcart',
                name:'shoppingcart',
                icon:'shopping-cart'
            },{
                text:'我的',
                path:'/mine',
                name:'Mine',
                icon:'user'
            }],
            current:'/home' 
        }
        // 改变this指向
        this.handleChange = this.handleChange.bind(this);
       
    }
    handleChange({key}){
        // 修改state
        this.setState({
          current:key
        })
        
        this.props.props.history.push(key);
        
      }
    render() {
      return (
            <div className="homeApp">
                <Menu 
                    mode="horizontal"
                    selectedKeys={[this.state.current]}
                    onClick={this.handleChange}
                >
                    {
                    this.state.menu.map(menu=>{
                        return(
                        <Menu.Item key={menu.name}>
                            <div className="itemcontent">
                                    <Icon type={menu.icon}/>
                                <div>
                                    {menu.text}
                                </div>
                            </div>
                        </Menu.Item>
                        )
                    })
                    }
                </Menu>
          </div>
      );
    }
  }

  export default Moduletab;
  