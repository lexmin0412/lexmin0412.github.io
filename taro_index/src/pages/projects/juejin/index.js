import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

class Index extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  componentWillMount () {}
  componentDidMount () {
    Taro.request({
      method: 'POST',
      header: {
        'Access-Control-Allow-Origin': '*'
      },
      url: 'https://timeline-merger-ms.juejin.im/v1/get_entry_by_hot_recomment',
      data: JSON.stringify({
        src: 'web',
      }),
      dataType: 'jsonp'
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
        
      </View>
    );
  }
}

export default Index;