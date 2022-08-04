import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Displaycard from './ContestApi';
import ContestApi from './ContestApi';
const axios = require("axios");

export default function ContestBar(props) {
    let site = props.site;
    let session = props.session
    const style = {
        color: "#FFFFFF"
      // color:"blue-grey lighten-5"
    }


    const [contestlist, setContest] = useState([]);
    useEffect(() => {

        async function getcontest() {
            try {
                const contest = await axios.get("/home")
                // console.log(contest.data);
                setContest(contest.data);
                const Apidata = contest.data;
                localStorage.setItem('mykey', JSON.stringify(Apidata));
            } catch (error) {
                console.log(error);
            }

        }
        getcontest()
    }, [])

    console.log(site, session);
    return (
        <>
            <div className="container">
                <div class="card  teal lighten-1 ">
                    <div class="card-content ">
                        <center>
                            <h3 style={style} >{props.site}</h3>
                        </center>
                    </div>
                    <div class="card-tabs">

                        <ul class="tabs tabs-fixed-width">
                            <li class="tab">
                                <Link className="nav-link active mx-3" to="/ContestApi" state={{ site: `${site}`, session: "future" }}><h5>FUTURE</h5></Link>
                            </li>
                            <li class="tab">
                                <Link className="nav-link active mx-3" to="/LiveContest" state={{ site: `${site}`, session: "live" }}><h5>LIVE</h5></Link>
                            </li>

                        </ul>
                    </div>

                </div>

            </div>

        </>
    )
}
