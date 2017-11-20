import * as React from 'react';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12'>
                    { this.props.children }
                </div>
            </div>
        </div>;
    }
}