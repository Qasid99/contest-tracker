import React from 'react'
import Carditems from './Carditems'
import Contestlist from './Contestlist';

export default function Dashboard() {

    const platforms = ["codechef", "codeforces", "hackerearth", "hackerrank", "leetcode", "atcoder",
        "topcoder", "google", "facebook", "csacademy"];

    return (
        <>
            <div className="container plz  row s4 m4">
                {platforms.map(name => (  
                    <Carditems site={name}/>   
                ))}

            </div>

        </>
    )
}