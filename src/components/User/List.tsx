import * as React from 'react'

export interface IProps {

}

interface IState {

}

/**
 * @author yihm
 * @date 2018/11/13 下午1:07
 * @desc 用户列表
 */
export default class UserList extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (<div>
            The new UserListComponent is running
        </div>)
    }
}
