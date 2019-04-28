import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { AtListItem } from 'taro-ui'

class Index extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  componentWillMount () {}
  componentDidMount () {
    Taro.request({
      method: 'GET',
      url: 'http://localhost:3000/playlist/detail?id=24381616'
    })
    .then((res)=>{
      console.log(res)
      this.setState({
        playlist: res.data.playlist
      })
    })
  } 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View>
        {/* {
          this.state.playlist &&
          this.state.playlist.map((item,index)=>{
            return (
              <AtListItem title={'sdfsfd'} arrow='right' onClick={()=>this.handleClick(item.url, item.type)} />
            )
          })
        } */}
        <AtListItem title={'sdfsfd'} arrow='right' />
      </View>
    );
  }
}
export default Index;