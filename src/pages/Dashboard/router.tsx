import * as React from 'react'
import Loadable from 'react-loadable'
import {Spin} from 'antd'

const AsyncAnalysis = Loadable({
    loader: () => import('@pages/Dashboard/Analysis'),
    loading() {
        return (<div><Spin tip='loading'/></div>)
    }
})

const AsyncMonitor = Loadable({
    loader: () => import('@pages/Dashboard/Monitor'),
    loading() {
        return (<div><Spin tip='loading'/></div>)
    }
})

const AsyncWorkplace = Loadable({
    loader: () => import('@pages/Dashboard/Workplace'),
    loading() {
        return (<div><Spin tip='loading'/></div>)
    }
})

const dashboardRoutes = [
    {
        path: '/dashboard/analysis',
        exact: true,
        component: AsyncAnalysis
    },
    {
        path: '/dashboard/monitor',
        component: AsyncMonitor
    },
    {
        path: '/dashboard/workplace',
        component: AsyncWorkplace
    }
]

export default dashboardRoutes




