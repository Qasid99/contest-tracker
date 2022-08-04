import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
//import { Link } from 'react-router-dom'
const axios = require("axios");


export default function Displaycard(props) {
  //const textFromStorage = JSON.parse(localStorage.getItem('mykey'));
  //console.log("getting from local storage",textFromStorage);
  // console.log(props.href);
  const location = useLocation()
  const site = location.state.site;
  const session = location.state.session;
  const startdate = props.start;
  const enddate = props.end;

  const stylefuture = {
    color: "#00517c"
  }
  const stylelive = {
    color: "#cddc39"
  }

  let toggle = 1;

  if (session == "future")
    toggle = 0;

  function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

    var offset = date.getTimezoneOffset() / 60 - 1;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
  }

  function diff_minutes(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));

  }

  const dt1 = new Date(`${startdate}`);
  const dt2 = new Date(`${enddate}`);
  const duration = diff_minutes(dt1, dt2);

  var datestart = convertUTCDateToLocalDate(new Date(`${startdate}`));
  datestart = String(datestart);

  var dateend = convertUTCDateToLocalDate(new Date(`${enddate}`));
  dateend = String(dateend);

  return (
    <>
      {toggle && <div className="container" style={stylefuture}>
        <center>
          <div class="card-panel  yellow lighten-1" style={stylefuture}>
            <h5>
              <strong>{props.event}</strong>
            </h5>
            <br></br>

            <p><strong>Start Date : </strong>  {datestart}</p>
            <p><strong>End Date : </strong> {dateend}</p>
            <p><strong>Duration : </strong> {duration} Hours</p>
            <p><strong>Status: </strong> {session}</p>

            <a href={props.href} target="_blank"><button class="btn waves-effect waves-light" type="submit" name="action">VISIT
              <i class="material-icons right">send</i>

            </button></a>
          </div>
        </center>

      </div>}


      {!toggle && <div className="container" style={stylefuture}>
        <center>
          <div class="card-panel  amber darken-1" style={stylefuture}>
            <h5>
              <strong>{props.event}</strong>
            </h5>
            <br></br>

            <p><strong>Start Date : </strong>  {datestart}</p>
            <p><strong>End Date : </strong> {dateend}</p>
            <p><strong>Duration : </strong> {duration} Hours</p>
            <p><strong>Status: </strong> {session}</p>

            <a href={props.href} target="_blank"><button class="btn waves-effect waves-light" type="submit" name="action">VISIT
              <i class="material-icons right">send</i>

            </button></a>
          </div>
        </center>

      </div>

      }

    </>
  )
}
