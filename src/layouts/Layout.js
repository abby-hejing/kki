import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './layout.less'
const Home = React.lazy(() => import('../Pages/Home/Home'));
const PhotoWall = React.lazy(() => import('../Pages/PhotoWall/PhotoWall'));

export default class Layout extends Component {
  render () {
    return <div className='layout'>
      <div className={`pic-details-demo-header`}>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      <Switch>
        {/*<Redirect to='/photoWall' />*/}
        {/*<Route path='/home' exact component={Home} />*/}
        <Route path='/photoWall' exact component={PhotoWall} />
        <Route render={() => <h1>404Page</h1>} />
      </Switch>
    </div>
  }
}
