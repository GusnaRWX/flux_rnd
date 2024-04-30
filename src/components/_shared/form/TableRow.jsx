import React from 'react'
import PropTypes from 'prop-types'

function TableRow({
  className,
  children,
  ...props
}) {
  return (
    <tr className={className} {...props}>{children}</tr>
  )
}

TableRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node || PropTypes.string
}

export default TableRow