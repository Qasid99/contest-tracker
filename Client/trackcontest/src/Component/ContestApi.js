import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import Displaycard from './Displaycard';
import ContestBar from './ContestBar';
import Nocontest from './Nocontest';

import Contestlist from './Contestlist';
const axios = require("axios");
//(current_time>=start_time && current_time<=end_time)
export default function ContestApi(props) {
    const location = useLocation()
    const site = location.state.site;
    const session = location.state.session;
    console.log(session);
    const textFromStorage = JSON.parse(localStorage.getItem('mykey'));
    const mapsite = new Map();
    mapsite.set('CODEFORCES', 1);
    mapsite.set('CODECHEF', 2);
    mapsite.set('LEETCODE', 102);
    mapsite.set('ATCODER', 93);
    mapsite.set('GOOGLE', 35);
    mapsite.set('FACEBOOK', 29);
    mapsite.set('TOPCODER', 12);
    mapsite.set('HACKERRANK', 63);
    mapsite.set('HACKEREARTH', 73);
    mapsite.set('CSACADEMY', 54);

    const siteid = mapsite.get(site)
    const contestbunddle = [];


    function dateCheck(from, to, check) {
        var fDate, lDate, cDate;
        fDate = Date.parse(from);
        lDate = Date.parse(to);
        cDate = Date.parse(check);

        if ((cDate < lDate && cDate > fDate)) {
            return 1;
        }
        else if (cDate == lDate && cDate == fDate)
            return 0;

        else if (cDate < lDate && cDate < fDate)
            return -1;
    }

    function convertUTCDateToLocalDate(date) {
        var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

        var offset = date.getTimezoneOffset() / 60 - 1;
        var hours = date.getHours();

        newDate.setHours(hours - offset);

        return newDate;
    }


    for (let i = 0; i < textFromStorage.objects.length; i++) {

        const start = (textFromStorage.objects[i].start);
        const end = (textFromStorage.objects[i].end);

        //Dates conversions
        const start_date = new Date(`${start}`).toLocaleDateString();
        const end_date = new Date(`${end}`).toLocaleDateString();
        const current_date = new Date().toLocaleDateString();
        //Time conversions
        const start_time = convertUTCDateToLocalDate(new Date(`${start}`)).toLocaleTimeString();
        const end_time = convertUTCDateToLocalDate(new Date(`${end}`)).toLocaleTimeString();
        const current_time = new Date().toLocaleTimeString();

        if (textFromStorage.objects[i].resource_id == siteid && session == "future" && (dateCheck(start_date, end_date, current_date) == -1 || dateCheck(start_date, end_date, current_date) == 0 )) {
            const obj = {
                event: `${textFromStorage.objects[i].event}`,
                href: `${textFromStorage.objects[i].href}`,
                start: `${textFromStorage.objects[i].start}`,
                end: `${textFromStorage.objects[i].end}`,
                duration: `${textFromStorage.objects[i].duration}`,
                id: i
            }

            contestbunddle.push(obj);
        }

    }

    if (contestbunddle.length == 0) {
        return (
            <>
                <ContestBar site={site} session={session} />
                <Nocontest />
            </>
        )
    }

    return (
        <>
            <ContestBar site={site} session={session} />

            <div className="container">

                {
                    contestbunddle.map((value, id) => {
                        return (
                            <>
                                <Displaycard site={site} href={value.href} event={value.event} duration={value.duration} start={value.start} end={value.end} />
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}
