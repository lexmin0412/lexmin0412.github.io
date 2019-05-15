import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { AtList, AtListItem } from "taro-ui"
import config from './../../config/index'

const linkEnum = [
  {
    sign: 'random_lunch',
    name: '今天吃什么',
    url: `${config.githubHost}/random_lunch/index.html`,
  },
  {
    sign: 'music_player',
    url: `${config.githubHost}/music_player/index.html`,
    name: '音乐',
  },
  {
    sign: 'goto_cellerchan',
    name: 'cellerchan',
    url: 'https://cellerchan.github.io/'
  },
  {
    sign: 'goto_cellerchan_web',
    name: 'cellerchan_web',
    url: 'https://cellerchan-web.github.io/'
  },
  {
    sign: 'goto_notes',
    name: 'notes',
    url: `https://github.com/cathe-zhang/Notes`
  },
  {
    type: 'taro',
    sign: 'music_player',
    url: `/pages/projects/music_player/index`,
    name: 'taro音乐播放器',
  },
  {
    type: 'taro',
    sign: 'juejin',
    url: `/pages/projects/juejin/index`,
    name: '掘金',
  },
  {
    type: 'taro',
    sign: 'news',
    url: `/pages/projects/news/index`,
    name: '新闻',
  },
]

class Index extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 

  /**
   * listItem点击事件
   * @param url 跳转链接/路由
   * @param type 项目类型 String taro-taro项目 默认普通项目
   */
  handleClick = (url, type) => {
    if ( type === 'taro' ) {
      Taro.navigateTo({
        url: url
      })
    }
    else {
      window.location.href = url
    }
  }
  
  render() {
    return (
      <View>
        <AtList>
          {
            linkEnum.map((item,index)=>{
              return (
                <AtListItem title={item.name} arrow='right' onClick={()=>this.handleClick(item.url, item.type)} />
              )
            })
          }
        </AtList>
      </View>
    );
  }
}
export default Index;