import * as React from 'react'
import {Spin} from 'antd'

/**
 * @author yihm
 * @date 2018/11/14 下午6:15
 * @desc 自定义loading组件
 */

// @ts-ignore
const Loading = ({isLoading, error}) => {
    if (isLoading) {
        return <div>
            <Spin tip='Loading...'/>
        </div>
    } else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>
    } else {
        return null
    }
}

export default Loading
