import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index-container'>
        <AtNavBar
          onClickRgIconSt={this.handleClick}
          // onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color='#000'
          title='NavBar 导航栏示例'
          leftText='返回'
          rightFirstIconType='bullet-list'
          // rightSecondIconType='user'
        />
      </View>
    )
  }
}
