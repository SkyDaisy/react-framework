import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.less'
import {HashRouter as Router, Link} from 'react-router-dom'
import PagesRouter from '@pages/Router'

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to='/user/list'>User</Link></li>
                <li><Link to='/user/create'>UserForm</Link></li>
                <li><Link to='/user/12'>UserForm12</Link></li>
            </ul>

            <PagesRouter/>
        </div>
    </Router>,
    document.getElementById('root') as HTMLElement,
)

