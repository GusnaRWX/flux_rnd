import React from 'react'
import PropTypes from 'prop-types'

function TableBody({
  className,
  children,
  ...props
}) {
  return (
    <tbody className={className} {...props}>{children}</tbody>
  )
}

TableBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node || PropTypes.string
}

export default TableBody