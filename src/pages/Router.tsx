import * as React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PagesUserList from '@pages/User/List'
import PagesUserForm from '@pages/User/Form'

/**
 * @author yihm
 * @date 2018/11/13 下午1:12
 * @desc 路由页面
 */
const PagesRouter = () => (
    <Router>
         <Switch>
             <Route path='/user/list' component={PagesUserList}/>
             <Route path='/user/create' component={PagesUserForm}/>
             <Route path='/user/:id' component={PagesUserForm}/>
         </Switch>
    </Router>
)

export default PagesRouter