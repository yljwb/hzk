import React from 'react'
import { Route } from 'react-router-dom'
import House from './House/index'
import Index from './Index/index'
import My from './My/index'
import News from './News/index'
import { TabBar } from 'antd-mobile'

const itemList = [
  { title: '首页', icon: 'icon-ind', path: '/home' },
  { title: '找房', icon: 'icon-findHouse', path: '/home/house' },
  { title: '咨询', icon: 'icon-infom', path: '/home/news' },
  { title: '我的', icon: 'icon-my', path: '/home/my' }
]
class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      selectedTab: props.location.pathname
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        selectedTab: this.props.location.pathname
      })
    }
  }

  renderItem() {
    return itemList.map(item => (
      <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.props.history.push(item.path)
        }}
      />
    ))
  }
  render() {
    return (
      <div className="home">
        {/* 配置路由规则 */}
        <Route exact path="/home" component={Index} />
        <Route path="/home/house" component={House} />
        <Route path="/home/news" component={News} />
        <Route path="/home/my" component={My} />
        <div className="tabBar">
          <TabBar
            unselectedTintColor="#888"
            tintColor="#21b97a"
            barTintColor="white"
            noRenderContent={true}
          >
            {this.renderItem()}
          </TabBar>
        </div>
      </div>
    )
  }
}
export default Home
