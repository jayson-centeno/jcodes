import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export interface ContentBodyExtendedProps {
    Title: string,
    CustomRootClass?: string,
    Active?:true
}

type ContentBodyProps = ContentBodyExtendedProps & RouteComponentProps<{}>;

export class ContentBody extends React.Component<ContentBodyProps, any> {

    public render() {

        return <div className={`publication ${this.props.CustomRootClass}`}>
                <div className="hex">
                </div>
                <div className="container relative">
                    <div className="pub-wrapper margin-bottom-100">
                        <div className="row">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div className="hex-invert">
                </div>
        </div>

    }

}