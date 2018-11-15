import * as React from 'react'
import RouteWithSubRoutes from '@components/UI/SubRoutes/SubRoutes'
import {Link, Switch} from 'react-router-dom'

export interface IProps {
    routes?: any
}

interface IState {

}

/**
 * @author yihm
 * @date 2018/11/15 下午3:35
 * @desc
 */
export default class UserLayout extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        console.log('UserLayout', this.props.routes)
    }

    render() {
        return (<div>
            <h2>UserLayout</h2>
            <ul>
                <li>
                    <Link to='/user/list'>UserList</Link>
                </li>
                <li>
                    <Link to='/user/form'>UserForm</Link>
                </li>
                <li>
                    <Link to='/user/12'>UserForm12</Link>
                </li>
            </ul>
            <Switch>
                {
                    this.props.routes.map((route: any) => (
                        <RouteWithSubRoutes key={route.path} {...route} />
                    ))
                }
            </Switch>
        </div>)
    }
}
