import * as React from 'react'
import UserForm from '@components/User/Form/Form'

// @ts-ignore
const PagesUserForm = ({match: {params}}) => (
    <div>
        <h2>用户{!params.id ? '新建' : '修改'}页面</h2>
        <UserForm id={params.id}/>
    </div>
)

export default PagesUserForm
