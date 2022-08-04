import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const style = {
        color: "#A0D468"
    }
    return (
        <>
            <div class="navbar-fixed m10 s10 ">
                <nav className="nav-extended blue-grey darken-4">
                    <div className="nav-wrapper blue-grey darken-4">
                        <a href="/" className="brand-logo center"><h3 style={style}>Contest Tracker</h3></a>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html"></a></li>
                            <li><a href="badges.html"></a></li>
                            
                            <li><Link to="/About" style={style}><h6>About Me</h6></Link></li>
                        </ul>
                    </div>
                    <div className="nav-content ">
                        <ul className="tabs tabs-transparent">
                            <li className="tab"><a href="#test1" className="active" >Competitive Programming</a></li>

                            <li className="tab"><a href="#test4" >Hiring Challanges</a></li>
                        </ul>
                    </div>
                </nav>

            </div>

        </>
    )
}

