import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Displaycard from './ContestApi';
import ContestApi from './ContestApi';
import Spinner from './Spinner';
const axios = require("axios");


export default function Contestlist(props) {
    const name = props.contestname;
    const style = {
        color:"#FFFFFF"
    }

    const [contestlist, setContest] = useState([]); 
    

    useEffect(() => {

        async function getcontest() {
            try {
               
                const contest = await axios.get("/home123")
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

    return (
        <>
            <div className="container">
                <div class="card ">
                    <div class="card-content teal lighten-1">
                        <center>
                            <h3 style={style}>{props.contestname}</h3>
                        </center>
                    </div>
                    <div class="card-tabs">
                        {props.Contestname}
                        <ul class="tabs tabs-fixed-width">
                            <li class="tab">
                                <Link className="nav-link active mx-3" to="/ContestApi" state={{site:`${name}`,session:"future"}}><h5>FUTURE</h5></Link>
                            </li>
                            <li class="tab">
                                <Link className="nav-link active mx-3" to="/Livecontest" state={{site:`${name}`,session:"live"}}><h5>LIVE</h5></Link>
                            </li>
                            
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}
