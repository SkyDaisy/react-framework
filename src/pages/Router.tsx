import * as React from 'react'
import userRoutes from '@pages/User/router'
import dashboardRoutes from '@pages/Dashboard/router'
import {HashRouter as Router, Link, Redirect, Switch} from 'react-router-dom'
import RouteWithSubRoutes from '@components/UI/SubRoutes/SubRoutes'

/**
 * @author yihm
 * @date 2018/11/13 下午1:12
 * @desc 路由页面
 */

const routes = [...userRoutes, ...dashboardRoutes]

const PagesRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/dashboard/analysis'>analysis</Link></li>
                <li><Link to='/dashboard/monitor'>monitor</Link></li>
                <li><Link to='/dashboard/workplace'>workplace</Link></li>
                <li><Link to='/user/form'>form</Link></li>
                <li><Link to='/user/list'>list</Link></li>
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
