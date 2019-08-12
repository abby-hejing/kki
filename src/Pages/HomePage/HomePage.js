import React, { Component } from 'react'
import { FullSlip, SlipItem } from 'react-fullslip'
import { Affix, Drawer } from 'antd'
import './homePage.less'

const arr = Array(37).fill(1)

export default class HomePage extends Component {
  state = {visible: false}
  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }
  handleClick = () => {
    this.showDrawer()
  }

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
      <Drawer
        width={'100%'}
        visible={this.state.visible}
        onClose={this.handleCancel}
      >
        <img style={{width: '99%', height: '96vh', userSelect: 'none'}} src={require('./mememe/32.png')} alt="" />
      </Drawer>
      <FullSlip {...options}>
        {arr.map((item, index) =>
          <SlipItem key={index} style={{backgroundColor: '#fff'}}>
            <div className='ppt'>
              <Affix offsetTop={10} style={{position: 'absolute', top: 24, right: 32, zIndex: 2}}>
                <svg
                  onClick={this.handleClick}
                  t="1565612397651" className="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="4229" width="64" height="64">
                  <path
                    d="M512.3 66.2c-246.9 0-447.1 200.2-447.1 447s200.2 447 447.1 447 447-200.1 447-447-200.1-447-447-447z m-64.2 665.1c0 35-28.6 63.6-63.6 63.6s-63.6-28.6-63.6-63.6V294.6c0-35 28.6-63.6 63.6-63.6 17.5 0 33.4 7.2 44.9 18.7s18.7 27.4 18.7 44.9v436.7z m256 0c0 35-28.6 63.6-63.6 63.6s-63.6-28.6-63.6-63.6V294.6c0-35 28.6-63.6 63.6-63.6 17.5 0 33.4 7.2 44.9 18.7s18.7 27.4 18.7 44.9v436.7z"
                    fill="#29ABE2" p-id="4230"/>
                </svg>
              </Affix>
              <img style={{width: '100vw', height: '100vh', userSelect: 'none'}}
                   src={require(`./mememe/${index + 1}.png`)} alt="" />
            </div>
          </SlipItem>)}
      </FullSlip>
    </div>
  }
}
