import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { TitleProps } from '../../common/Common'
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom'
import { OneColumnContentBody } from '../../components/ContentBody/OneColumnContentBody';
import { Control, Form, actions } from 'react-redux-form';
import * as ContactStore from '../../store/Contact'
import { ApplicationState } from '../../store'
import * as Recaptcha from "react-recaptcha";
import { inject } from "inversify"
import { IAuthenticationService } from "../../services/AuthenticationService"
import DIContainer from "../../di/bootstrap"

import { NotificationManager } from 'react-notifications';

type ContactProps = TitleProps &
     ContactStore.IContactState &
     typeof ContactStore.actionCreators &
     RouteComponentProps<any>

let recaptchaInstance;
let captChaVerified: boolean = false;

export class ContactForm extends React.Component<ContactProps, any> {

    private authenticationService: IAuthenticationService;

    constructor() {
        super()
        this.authenticationService = DIContainer.get<IAuthenticationService>("IAuthenticationService");
    }

    componentDidMount() {
        captChaVerified = false;
    }

    handleSubmit(contact: any) {
        
        if (this.valide()) {
            contact.contact.verified = true;
            var result = this.props.submitContact(contact.contact)



        }
        else {
            NotificationManager.error('Invalid Captcha!', '', 2000);
        }

    }

    onloadCallback() { }

    valide() {
        return captChaVerified;
    }

    verifyCallback() {
        captChaVerified = true;
    }

    render() {

        return <OneColumnContentBody {...this.props} Title="Feel free to contact me.">
            <Form model="contact" className="margin-top-30" onSubmit={(contact) => this.handleSubmit(contact)}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Name</label>
                            <Control.text model=".Name" className="form-control" placeholder="Enter Your Name" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <Control.text model=".Email" className="form-control" placeholder="Enter Your Email" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Message</label>
                            <Control.textarea model=".Message" className="form-control" placeholder="Enter Your Message" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 margin-top-10 margin-bottom-10">
                        <div className="form-group">
                            <Recaptcha sitekey={this.authenticationService.getCaptchaKey()}
                                ref={e => recaptchaInstance = e}
                                onloadCallback={this.onloadCallback}
                                verifyCallback={this.verifyCallback}
                                render='explicit' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-default">Submit!</button>
                    </div>
                </div>
            </Form>
        </OneColumnContentBody>

    }

}

export default connect(
    (state: ApplicationState) => state.contact,
    ContactStore.actionCreators
)(ContactForm) as typeof ContactForm