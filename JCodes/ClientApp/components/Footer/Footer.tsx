import * as React from "react"


export class Footer extends React.Component<any, any> {

    public render() {
        return <div>
            <div className='footer'>

                <div className='container'>
                    <div className="row">
                        <div className="col-sm-5">
                            <h3 className="logo-text">{'\{ '} JCODES<span className="blinker"></span>{' \}'}</h3>

                            <div className="row margin-top-30">

                                <div className="col-sm-12">

                                    <span className="title">
                                        STAY CONNECTED
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