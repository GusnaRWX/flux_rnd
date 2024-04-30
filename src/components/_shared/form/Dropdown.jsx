import React from 'react'
import PropTypes from 'prop-types'

function Dropdown({
  label,
  body
}) {
  return (
    <div className='flex items-center justify-end'>
      <button
       className='relative
       group
       transition-all
       duration-200
       focus:overflow-visible
       w-max h-max
       overflow-hidden flex-row
       items-center justify-center
       bg-transparent rounded-lg
       hover:bg-zinc-200 border-zinc-200
       '>
        {label}
        <div className='absolute z-10 w-52 shadow-lg -bottom-40 right-0 h-max p-2 border bg-white border-zinc-200 rounded-lg flex flex-col gap-2'>
          {body}
        </div>
       </button>
    </div>
  )
}

Dropdown.propTypes = {
  label: PropTypes.any,
  body: PropTypes.node
}

export default Dropdown