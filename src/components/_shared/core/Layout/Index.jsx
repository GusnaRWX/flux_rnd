import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../NavBar/Index'

const Layout = ({children, navigation = true}) => {
  return (
    <div className='base-wrapper'>
      {navigation && (
        <NavBar>
          {children}
        </NavBar>
      )}
      {
        !navigation && (
          <>
           {children}
          </>
        )
      }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout