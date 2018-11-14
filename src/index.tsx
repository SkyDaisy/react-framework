import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.less'
import {HashRouter as Router, Link, Route} from 'react-router-dom'
import PagesUserList from '@pages/User/List'

ReactDOM.render(
    <Router>
        <div>
            <Link to='/'>User</Link>

            <Route exact path='/' component={PagesUserList}/>
        </div>
    </Router>,
    document.getElementById('root') as HTMLElement,
)

