import React from 'react'
import PropTypes from 'prop-types'

function LayoutContainer({
  children
}) {
  return (
    <div className='pl-4 pr-4'>{children}</div>
  )
}

LayoutContainer.propTypes = {
  children: PropTypes.node
}

export default LayoutContainer