import * as React from 'react';

export class TopNavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav className="navbar navbar-default custom-nav">
            <div className="container">
                <div className="navbar-headerclassName">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                 <ul className="nav navbar-nav">
                    <li className="active">
                        <span className="bracket">{'{'}</span><a href="#">HOME</a>  ||
                    </li>
                    <li>
                        <a href="#">ABOUT</a> ||
                    </li>
                    <li>
                        <a href="#">BLOGS</a> ||
                    </li>
                    <li>
                        <a href="#">WEB TOOLS</a> ||
                    </li>
                    <li>
                        <a href="#">STACKOVERFLOW</a> ||
                    </li>
                    <li>
                        <a href="#">LINKEDIN</a> ||
                    </li>
                    <li>
                        <a href="#">JAYSWORD1@YAHOO.COM</a> <span className="bracket">{'}'}</span>
                    </li>
                </ul> 
            </div>
        </nav>;
    }
}