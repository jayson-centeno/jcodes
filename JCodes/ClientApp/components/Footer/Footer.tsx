import * as React from "react"
import { Link } from 'react-router-dom';

export class Footer extends React.Component<any, any> {

    public render() {
        return <div>
            <div className='footer margin-bottom-60 margin-top-30'>

                <div className='container'>
                    <div className="row">
                        <div className="col-sm-5 margin-top-10">
                            <h3 className="logo-text">{'\{ '} JCODES<span className="blinker"></span>{' \}'}</h3>

                            <div className="row margin-top-30">

                                <div className="col-sm-12">

                                    <span className="title">
                                        STAY CONNECTED
                                    </span>

                                    <ul id="connected" className="margin-top-20">
                                        <li>
                                            <a className="link" ><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a className="link"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a className="link"><i className="fa fa-google-plus"></i></a>
                                        </li>
                                    </ul>

                                </div> 

                                <div className="col-sm-12 margin-top-30">
                                    <span className="title">
                                        <a className="link mail-to" href="mailTo:jaysword1@yahoo.com">jaysword1@yahoo.com</a> 
                                    </span>
                                </div> 

                            </div>


                        </div>
                        <div className="col-sm-4">

                            <div className="row margin-top-30">

                                <div className="col-sm-12">

                                    <span className="title">
                                        EXPLORE
                                    </span>

                                    <ul id="explore" className="margin-top-10">
                                        <li>
                                            <a className="link">Web Tools</a>
                                        </li>
                                        <li>
                                            <Link className="link" to="/">Tutorials and Publications</Link>
                                        </li>
                                        <li>
                                            <Link className="link" to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link className="link" to="/">Home</Link>
                                        </li>
                                    </ul>

                                </div>

                            </div>


                        </div>
                        <div className="col-sm-3">

                            <div className="row margin-top-30">

                                <div className="col-sm-12">

                                    <span className="title">
                                        LATEST BLOG POSTS
                                    </span>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='rights'>
                <div className='container'>
                    <div className="row">
                        <div className="col-sm-5">
                            @217-2018 <span className="highlight">www.jcodes.com</span>. All Rights Reserved
                        </div>
                        <div className="col-sm-7">
                            Powered by <span className="highlight">.Net Core, ReactJs, Sql Server</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}