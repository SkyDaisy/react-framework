import * as React from 'react'
import Loadable from 'react-loadable'
import {Spin} from 'antd'

const PagesUserList = Loadable({
    loader: () => import('@components/User/List'),
    loading() {
        return (<div><Spin tip='loading'/></div>)
    }
})

export default PagesUserList
