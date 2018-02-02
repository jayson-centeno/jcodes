import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ContentBodyExtendedProps, ContentBody } from './ContentBody'

type TwoColumnContentBodyProps = ContentBodyExtendedProps & RouteComponentProps<any>;

export class TwoColumnContentBody extends React.Component<TwoColumnContentBodyProps>{
    public render() {
        return <ContentBody {...this.props}>
            <div className="col-md-7">
                <h1 className="main-title publication-title">{this.props.Title}</h1>
                //<a className="link link-list">See list</a>
            </div>
            <div className="col-md-5">
                {this.props.children}
            </div>
        </ContentBody>
    }
}