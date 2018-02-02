import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export interface ContentBodyExtendedProps {
    Title: string,
    CustomRootClass?:string
}

type ContentBodyProps = ContentBodyExtendedProps & RouteComponentProps<{}>;

export class ContentBody extends React.Component<ContentBodyProps, any> {

    public render() {

        return <div>

            <div className={`publication + ${this.props.CustomRootClass}`}>
                <div className="hex">
                </div>
                <div className="container relative">
                    <div className="pub-wrapper margin-bottom-50">
                        <div className="row">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div className="hex-invert">
                </div>
            </div>

        </div>

    }

}