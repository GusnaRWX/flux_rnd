import React from 'react'
import PropTypes from 'prop-types'

function TableCell({
  className,
  children,
  ...props
}) {
  return (
    <td className={className} {...props}>{children}</td>
  )
}

TableCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node || PropTypes.string
}

export default TableCell