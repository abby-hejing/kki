import React, { Component } from 'react'
import { FullSlip, SlipItem } from 'react-fullslip'
import './homePage.less'

const arr = Array(37).fill(1)

export default class HomePage extends Component {
  render () {
    let options = {
      navigation: true,           //是否开启导航点,      默认为true
      activeClass: 'active',      //自定义导航点类名,    默认为active, .navigation-dot下的.active
      duration: 1000,              //屏幕滑动切换的时间,  默认为1000
      transverse: true,            //是否更改为横向滑动,  默认为false
      // navImage:[require('./assets/1.jpg'),require('./assets/2.jpg'),require('./assets/3.jpg')],    //导航点图片,可选,默认无图片
      arrowNav: true,              //是否开启箭头导航     默认false不开启
    }

    return <div className='home-page'>
      <FullSlip {...options}>
        {arr.map((item, index) =>
          <SlipItem style={{backgroundColor: '#C6E2FF'}}>
            <img style={{width:'100vw',height:'100vh'}} src={require(`./mememe/${index+1}.png`)} alt="" />
        </SlipItem>)}

      </FullSlip>
    </div>
  }
}
