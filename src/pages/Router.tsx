import * as React from 'react'
import {HashRouter as Router, Link, Redirect, Switch} from 'react-router-dom'
import RouteWithSubRoutes from '@components/UI/SubRoutes/SubRoutes'
import routes from '@config/router.config'
// import { createBrowserHistory } from 'history'

/**
 * @author yihm
 * @date 2018/11/13 下午1:12
 * @desc 路由页面
 */
// const hist = createBrowserHistory()  history={hist}
const PagesRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/user'>list</Link></li>
            </ul>

            <Switch>
                {routes.map((route: any) => (
                    <RouteWithSubRoutes key={route.path} {...route}/>
                ))}
                <Redirect from='/' to='/dashboard/analysis'/>
            </Switch>
        </div>
    </Router>
)

export default PagesRouter
