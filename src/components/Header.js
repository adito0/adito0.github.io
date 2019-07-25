import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-cloud"></span>
          <h1>
            Hi, I'm <strong>Aditi</strong>
          </h1>
          <p>
            3rd year Student BE(Hons.)/BSc majoring in Electrical and Electronic
            Engineering, Computer Science and Statistics
          </p>
          <ul className="actions">
            <li>
              <a href="#two" className="button scrolly">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
