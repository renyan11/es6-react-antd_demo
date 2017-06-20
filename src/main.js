/**
 * 
 * @authors Ryan
 * @date    2017-06-19 16:42:35
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch, message } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
// 引入字体图标库
import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

// 引入单个页面（包括嵌套的子页面）
import myTable from './components/table.js'
import myForm from './components/form.js'
import myChart from './components/chart.js'
import myAnimate from './components/animate.js'
import myCalendar from './components/calendar.js'
import myCard from './components/fetch.js'
import myTree from './components/tree.js'

const ACTIVE = { color: 'red' }

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    loginOut = () => {
       message.info('正在退出...');
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'Ryan'
        })
    }

    render() {
        return (
            <div>
                <div id="leftMenu"> 
                    <img src='src/assets/images/logo.png' width="50" id="logo"/>
                    <Menu theme="dark"
                        onClick={this.handleClick}
                        style={{ width: 185 }}
                        defaultOpenKeys={['sub1', 'sub2']} //初始展开的 SubMenu 菜单项 key 数组
                        defaultSelectedKeys={[this.state.current]}//初始展开的 SubMenu 菜单项 key 数组
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" spin="true"/><span>导航一</span></span>}>
                            <Menu.Item key="1"><Link to="/myTable" activeStyle={{color: 'red'}}>表格</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/myForm" activeStyle={{color: 'red'}}>表单</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/myChart" activeStyle={{color: 'red'}}>图表</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/myCalendar" activeStyle={{color: 'red'}}>日历</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" spin="true"/><span>导航二</span></span>}>
                            <Menu.Item key="5"><Link to="/myCard" activeStyle={{color: 'red'}}>导航</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/myAnimate" activeStyle={{color: 'red'}}>关注</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/myTree" activeStyle={{color: 'red'}}>树形</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal" onClick={this.loginOut}>
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="loginout">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Sider}>
            <IndexRoute path="myTable" component={myTable} />
            <Route path="myTable" component={myTable} />
            <Route path="myForm" component={myForm} />
            <Route path="myChart" component={myChart} />
            <Route path="myCalendar" component={myCalendar} />
            <Route path="myAnimate" component={myAnimate} />
            <Route path="myCard" component={myCard} />
            <Route path="myTree" component={myTree} />
        </Route>
    </Router>
), document.getElementById('app'));


