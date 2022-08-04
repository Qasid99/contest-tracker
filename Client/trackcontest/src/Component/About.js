import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  const style = {
    color: "green"
  }
  return (
    <>
      <div className="about containeer s12 m12" style={style}>
        <center>

          <div class="chip">
            App Version 1.0.0
            Built by Qasid Shoaib copyright 2022
            <a href="\"> <i class="close material-icons">close</i> </a>
          </div>

        </center>
      </div>
    </>
  )
}

