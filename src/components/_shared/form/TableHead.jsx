import React from 'react'
import PropTypes from 'prop-types'

function TableHead({
  className,
  children,
  ...props
}) {
  return (
    <thead className={className} {...props}>{children}</thead>
  )
}

TableHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node || PropTypes.string
}

export default TableHead