import * as React from 'react'
import Loadable from 'react-loadable'
import {Spin} from 'antd'

const AsyncUserForm = Loadable({
    loader: () => import('@components/User/Form/Form'),
    loading() {
        return (<div><Spin tip='loading'/></div>)
    }
})

const AsyncUserList = Loadable({
    loader: () => import('@components/User/List'),
    loading() {
        return (<div><Spin tip='loading'/></div>)
    }
})

const userRoutes = [
    {
        path: '/user/form',
        component: AsyncUserForm
    },
    {
        path: '/user/list',
        component: AsyncUserList
    }
]

export default userRoutes
