import * as React from 'react';

export class Header extends React.Component<{}, {}> {
    public render() {
        return <div className='row'>
            <div className="col-sm-9">
                <h3 className="logo-text">{'\{ '} JCODES<span className="blinker"></span>{' \}'}</h3>
            </div>
            <div className="col-sm-3 pull-right">
                <h3><a id="login">Login</a></h3>
            </div>
        </div>;
    }
} 