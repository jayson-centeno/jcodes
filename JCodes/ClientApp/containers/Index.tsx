import * as React from 'react';
import { Header } from '../components/Header/Header';
import { TopNavMenu } from '../components/TopNavMenu/TopNavMenu';
import { Footer } from '../components/Footer/Footer';

import container from "../di/bootstrap"
import { IAuthenticationService } from "../services/AuthenticationService";

export class Index extends React.Component<{}, {}> {

    componentDidMount() {}

    public render() {
        return <div>
            <div className='container'>
                <Header />
                <TopNavMenu />
            </div>
            {this.props.children}
            <Footer />
        </div>;
    }
} 