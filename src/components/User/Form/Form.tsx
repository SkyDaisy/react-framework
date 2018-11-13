import * as React from 'react'
import './Form.less'

export interface IProps {
  id: string
}

interface IState {

}

/**
 * @author yihm
 * @date 2018/11/13 下午1:08
 * @desc 用户新建或修改页面
 */
export default class UserForm extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (<div>
            The new UserFormComponent is running {this.props.id}
        </div>)
    }
}
