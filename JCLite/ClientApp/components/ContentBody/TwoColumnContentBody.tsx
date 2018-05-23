import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ContentBodyExtendedProps, ContentBody } from './ContentBody'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

type TwoColumnContentBodyProps = ContentBodyExtendedProps & RouteComponentProps<any>;

export class TwoColumnContentBody extends React.Component<TwoColumnContentBodyProps>{
    public render() {

        const PageFade = ({ children, ...props }) => (
            <CSSTransition
                {...props}
                classNames="fadeTranslate"
                timeout={1000}>
                {children}
            </CSSTransition>
        )

        return <TransitionGroup>
            <PageFade >
                <ContentBody {...this.props}>
                    <div className="col-md-7">
                        <h1 className="main-title publication-title">{this.props.Title}</h1>
                    </div>
                    <div className="col-md-5">
                        {this.props.children}
                    </div>
                </ContentBody>
            </PageFade>
        </TransitionGroup>

    }
}