import React from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types'

function Datepicker({
  id,
  name,
  value,
  onChange,
  label,
  className,
  isRequired = false,
  ...props
}) {
  return (
    <div className={className}>
    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
        {label}{isRequired && (<span className='text-[#FF0000]'>*</span>)}
      </label>
    <ReactDatePicker
     className={`shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 `}
     calendarClassName="bg-white shadow-lg rounded border border-gray-300"
     id={id}
     name={name}
     value={value}
     onChange={onChange}
     dateFormat={'YYYY-MM-DD'}
    />
    </div>
  )
}

Datepicker.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool
}

export default Datepicker