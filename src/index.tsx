import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.less'
import {Button} from 'antd'

ReactDOM.render(
    <div><Button size='small' type='primary'>Click Me</Button></div>,
    document.getElementById('root') as HTMLElement,
)

