import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from "reactstrap";

import { Publication } from "../Publication/Publication";
import * as PublicationStore from '../../store/Publications'
import { ApplicationState } from '../../store'
import { connect } from 'react-redux'

type PublicationProps = PublicationStore.PublicationsState & typeof PublicationStore.actionCreators & RouteComponentProps<{}>;

class Home extends React.Component<PublicationProps, {}> {

    componentDidMount() {
        this.props.fetchPublications();
    }

    public render() {
        return <div>
            <div className="container">
                <div className="row margin-bottom-120">
                    <div className="col-sm-5">
                        <h1 className="main-title">Jayson is a Passionate Senior .Net & Front-End Developer</h1>
                    </div>
                    <div className="col-sm-7">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7">
                        <h2 className="sub-title">About</h2>
                        <hr className="divider1" />
                        <hr className="divider2" />
                        <p>
                            As both designer and developer of projects that require <br /> a laser focus on both,                            I unite form and function to <br />meet both user needs and business goals.                        </p>
                        <p>
                            Currently improving customer experiences as Senior UX <br /> Designer at BrightEdge.
                        </p>
                    </div>
                    <div className="col-sm-5 ">

                        <h2 className="sub-title">Specializing In</h2>
                        <hr className="divider1" />
                        <hr className="divider2" />
                        <div className="row">
                            <p className="col-sm-6">
                                ASP.Net <br />                                Front-End Development                                </p>
                            <p className="col-sm-6">
                                API <br />
                                Research
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="publication">
                <div className="hex">
                </div>
                <div className="container relative">
                    <div className="pub-wrapper">
                        <div className="row">
                            <div className="col-md-7">
                                <h1 className="main-title publication-title">Publications on .Net and Front end</h1>
                                <a className="link link-list">See list</a>
                            </div>
                            <div className="col-md-5">
                                <Publication isLoading={this.props.isLoading} publications={this.props.publications} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hex-invert">
                </div>
            </div>
        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state.publications,
    PublicationStore.actionCreators
)(Home) as  typeof Home 