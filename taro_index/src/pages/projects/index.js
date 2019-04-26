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
  }
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

  handleClick = (url) => {
    window.location.href = url
  }
  
  render() {
    return (
      <View>
        <AtList>
          {
            linkEnum.map((item,index)=>{
              return (
                <AtListItem title={item.name} arrow='right' onClick={()=>this.handleClick(item.url)} />
              )
            })
          }
        </AtList>
      </View>
    );
  }
}
export default Index;