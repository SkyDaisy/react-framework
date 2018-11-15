import UserLayout from '@layouts/UserLayout'
import BasicLayout from '@layouts/BasicLayout'
import PagesUserForm from '@pages/User/Form'
import PagesUserList from '@pages/User/List'
import PagesDashboardAnalysis from '@pages/Dashboard/Analysis'
import PagesDashboardMonitor from '@pages/Dashboard/Monitor'
import PagesDashboardWorkplace from '@pages/Dashboard/Workplace'

const routes = [
    // user
    {
        path: '/user',
        component: UserLayout,
        name: 'UserLayout',
        routes: [
            // { path: '/user', redirect: '/user/login' },
            { path: '/user/list', name: 'userList', component: PagesUserList },
            { path: '/user/form', name: 'userForm', component: PagesUserForm },
            { path: '/user/:id', name: 'userFormById', component: PagesUserForm },
        ]
    },
    // app
    {
        path: '/',
        component: BasicLayout,
        name: 'BasicLayout',
        routes: [
            // dashboard
            // { path: '/', redirect: '/dashboard/analysis' },
            {
                path: '/dashboard/analysis',
                name: 'analysis',
                component: PagesDashboardAnalysis,
            },
            {
                path: '/dashboard/monitor',
                name: 'monitor',
                component: PagesDashboardMonitor,
            },
            {
                path: '/dashboard/workplace',
                name: 'workplace',
                component: PagesDashboardWorkplace,
            }
        ]
    }
    ]

export default routes
