import * as React from "react"
import { Link } from "gatsby"

import "./style.css";

const Header = ({ siteTitle }) => (
  <header>
    <div className="site-container" style={{ padding: '10px' }}>
      <h1 style={{ margin: 0, fontSize: '1rem' }}>
        <Link className="link-noStyle" style={{ color: 'white' }} to="/">
          ✨ { siteTitle }
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
