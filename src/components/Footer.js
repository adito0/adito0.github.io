import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="https://www.linkedin.com/in/aditi-ram/"
              className="icon alt fa-linkedin"
            >
              <span className="label">Linkedin</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/adito0" className="icon alt fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:aditi.ramalingam@outlook.com"
              className="icon alt fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        {/* <ul className="copyright">
          <li>&copy; Untitled</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul> */}
      </section>
    )
  }
}

export default Footer
