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
      method: 'GET',
      url: 'http://v.juhe.cn/toutiao/index',
      data: {
        type: 'top',
        key: '4f19cac29ddbd92f1c2093e859a93809'
      },
      header: { 'Content-Type': 'text/html; charset=utf-8', 'Access-Control-Allow-Origin': '*' },
      dataType: 'json',
      responseType: 'text',
    }).then((res)=>{
      console.log(res)
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