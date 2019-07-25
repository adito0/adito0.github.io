import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

import pcb from '../assets/images/pcb.png'
import game from '../assets/images/game.png'
import stair from '../assets/images/stair.png'
import aditi from '../assets/images/aditi.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter - Photon'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  A little about me...
                  <br />
                </h2>
              </header>
              <p>
                At 15 years old, when I designed my first alarm clock different
                to everyone in-class – and better than the teacher’s one - I
                knew that my career was going to be in design, innovation and in
                problem-solving. <br /> <br />I love challenges and anything
                related to electrical, electronics and coding. My unique degree
                combination is an attempt to master all three. Being a community
                coach, local tutor and women in engineering leader, serving the
                community best is what I want to do. <br /> <br />
                Currently I am interested in renewable energy systems, IOT and
                building technologies. When I am not busy at uni I am a social
                lacrosse player and a part of the Management and Consultancy
                Club.
              </p>

              <h3> Achievements </h3>

              <ul>
                <li> First in Deloitte Case Competition </li>
                <li> 2nd in Electrical Design Project</li>
                <li> 5 Tertiary Level Scholarships </li>
                <li> Lewis Trophy for Excellence in Physics</li>
              </ul>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={aditi} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <div>
                <span className="image fit">
                  <img src={stair} alt="" />
                </span>
                <span className="image fit">
                  <img src={pcb} alt="" />
                </span>

                <span className="image fit">
                  <img src={game} alt="" />
                </span>
              </div>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Projects</h2>
              </header>
              <ul>
                <h4>
                  Lighting Design Project (DIALux, AS/NZS1680 2.1/2.2, NZ
                  Building Code) (See adjacent picture)
                </h4>
                Designed commercial building/stairwell lighting and emergency
                lighting compliant with regulations (NZ Law)
              </ul>

              <ul>
                <h4>
                  “Smart” Wireless Energy Monitor (BLE modules, Altium,
                  ATMega328P, C)
                </h4>
                UART Transmission(Bluetooth), Resampling, Circuit Design, Power
                Electronics
              </ul>

              <ul>
                <h4>Social Networking Site (Python/React/SQL)</h4>
                Backend/Web development, Networks engineering, Cyber-security,
                Databases
              </ul>

              <ul>
                <h4>
                  Inter-Car Auxiliary Light Speed Communication System (Altium,
                  LTSpice) (See adjacent picture)
                </h4>
                SMT PCB Design and Assembly, Analog Design, Testing, 2nd place
                in cohort
              </ul>

              <ul>
                <h4>Robotic Prosthetic Arm (Arduino)</h4>
                3D Printing/Assembly of parts, Microcontroller Programming,
                Breadboarding
              </ul>

              <ul>
                <h4>
                  Role-Playing Game Development (Java/Swing) (See adjacent
                  picture)
                </h4>
                GUI development, AI Enemies, Multi-threading, OOP, Dijkstra’s
                Algorithm
              </ul>

              <h3>Other Projects</h3>

              <ul>
                <li>Best Path (MATLAB)</li>
                <li>Emergency Services System (C++)</li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
