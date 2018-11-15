import * as React from 'react'
import RouteWithSubRoutes from '@components/UI/SubRoutes/SubRoutes'
import {Link} from 'react-router-dom'

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
export default class BasicLayout extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
        console.log('BasicLayout', this.props.routes)
    }

    render() {
        return (<div>
            <h2>BasicLayout</h2>
            <ul>
                {this.props.routes.map((route: any) => (
                    <li key={route.path}>
                        <Link to={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
            {
                this.props.routes.map((route: any) => (
                    <RouteWithSubRoutes key={route.path} {...route} />
                ))
            }
        </div>)
    }
}
