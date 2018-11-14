import * as React from 'react'
import Loadable from 'react-loadable'
import {Spin} from 'antd'
// import UserForm from '@components/User/Form/Form'

// @ts-ignore
const PagesUserForm = Loadable({
    loader: () => import('@components/User/Form/Form'),
    loading() {
        return (<div><Spin tip='loading'/></div>)
    }
})
// ({match: {params}}) => (
//     <div>
//         <h2>用户{!params.id ? '新建' : '修改'}页面</h2>
//         <UserForm id={params.id}/>
//     </div>
// )

export default PagesUserForm
