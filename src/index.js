import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import './index.less'

// const Layout = React.lazy(() => import('./layouts/Layout'))
const HomePage = React.lazy(() => import('./Pages/HomePage/HomePage'))

ReactDOM.render(
  <HashRouter>
    <Suspense fallback={null}>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </Suspense>
  </HashRouter>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
