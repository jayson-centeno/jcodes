import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Button } from "reactstrap";

import { Publication } from "../Publication/Publication";
import * as PublicationStore from '../../store/Publications'
import { ApplicationState } from '../../store'
import { connect } from 'react-redux'
import { TwoColumnContentBody } from '../../components/ContentBody/TwoColumnContentBody';

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
                        <p className="mid-text">
                            As both designer and developer of projects that require <br /> a laser focus on both,                            I unite form and function to <br />meet both user needs and business goals.                        </p>
                        <p className="mid-text">
                            Currently improving customer experiences as Senior UX <br /> Designer at BrightEdge.
                        </p>
                    </div>
                    <div className="col-sm-5">
                        <h2 className="sub-title">Specializing In</h2>
                        <hr className="divider1" />
                        <hr className="divider2" />
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="mid-text">
                                    ASP.Net <br />                                    Front-End Development                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mid-text">
                                    API <br />
                                    Research
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TwoColumnContentBody {...this.props} Title="Publications on .Net and Front end" CustomRootClass="home">
                <Publication isLoading={this.props.isLoading} publications={this.props.publications} />
            </TwoColumnContentBody>

        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state.publications,
    PublicationStore.actionCreators
)(Home) as  typeof Home 