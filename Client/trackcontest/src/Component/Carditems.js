import React from 'react'
import { Link } from 'react-router-dom';
//import { Component } from 'react'
//import codeheflogo from './codecheflogo.svg';

export default function Carditems(props) {
    let site = props.site;
    let imgtype = "logo.png";
    let imgloc = site.concat(imgtype);
    let logo = "</>";
    let slash ="/";
    let pathlink = slash.concat(site);
   
    return (
        <>
            <div className="col s10 m6">
                <div className="card sticky-action small">
                    <div className="card-image">
                        <img src={imgloc} width="200" />
                    </div>
                    <div className="container card-content">
                    </div>
                    <div className=" card-action blue-grey lighten-4">
                        <center>
                            <h5>{(props.site).toUpperCase()}</h5>
                        </center>
                        <center>
                            <Link to={pathlink}>
                                <button className="btn waves-effect waves-light center my-8 btn-medium" type="submit" name="action">
                                    CONTESTS {logo}
                                </button>

                            </Link>

                        </center>
                    </div>
                </div>
            </div>

        </>

    )

}

