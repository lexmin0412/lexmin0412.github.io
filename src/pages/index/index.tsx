import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import config from './../../config/index'
console.log(config);


export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    list: [
      {
        title: '博客',
        href: `${config.githubHost}/blog`
      },
      {
        title: 'taro',
        href: `${config.githubHost}/taro_pro`
      },
      {
        title: 'react',
        href: `${config.githubHost}/react_framework`
      },
      {
        title: '我的第一个网页',
        href: `${config.githubHost}/my_first_page`
      },
      {
        title: '今天吃什么',
        href: `${config.githubHost}/random_lunch`
      },
    ]
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // listItem点击
  listItemClick = ( href ) => {
    window.location.href = href
  }

  render () {
    const { list } = this.state
    return (
      <View className='index-container'>
        <View className="list">
          {
            list.map((item,index)=>{
              return (
                <View className="list-item"
                  onClick={this.listItemClick.bind(this, item.href)}
                >
                  <View className="title">
                    {item.title}
                  </View>
                  <View className="arrow">
                    {/* > */}跳转
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}
