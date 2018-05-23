import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ContentBodyExtendedProps, ContentBody } from './ContentBody'

type OneColumnContentBodyProps = ContentBodyExtendedProps & RouteComponentProps<any>;

export class OneColumnContentBody extends React.Component<OneColumnContentBodyProps>{
    public render() {
        return <ContentBody {...this.props} CustomRootClass="one-column">
            <div className="col-md-12">
                <h1 className="main-title publication-title">{this.props.Title}</h1>
            </div>
            <div className="col-md-12">
                {this.props.children}
            </div>
        </ContentBody>
    }
}