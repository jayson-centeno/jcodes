import * as React from 'react';
import { Link } from 'react-router-dom'

export class Header extends React.Component<{}, {}> {
    public render() {
        return <div className='row'>
            <div className="col-sm-9">
                <Link className="logo-link" to={'/'}><h3 className="logo-text">{'\{ '} JCLite<span className="blinker"></span>{' \}'}</h3></Link>
            </div>
            <div className="col-sm-3 pull-right">
                <h3><a id="login">Login</a></h3>
            </div>
        </div>;
    }
} 