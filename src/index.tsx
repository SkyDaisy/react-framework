import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.less'
import PagesRouter from '@pages/Router'

ReactDOM.render(
    <PagesRouter/>,
    document.getElementById('root') as HTMLElement,
)

