import React from 'react'
import { Link } from 'docz'

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <img
          src="https://raw.githubusercontent.com/Redocly/redoc/master/docs/images/redoc-logo.png"
          alt="Logo"
          style={{ width: 120 }}
        />
      </Link>
    </>
  )
}
