import React from 'react'

function Select({
  id,
  name,
  label,
  value,
  className,
  isRequired = false,
  onChange,
  options,
  error,
  errorMessage
}) {
  return (
    <div className={className}>
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
        {label}{isRequired && (<span className='text-[#FF0000]'>*</span>)}
      </label>
      <select
       id={id}
       className={`shadow appearance-none border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none ${error ? 'focus:border-red-500' :'focus:border-gray-500'} `}
       name={name}
       value={value}
       onChange={onChange}
      >
        {
          options.map((option, index) => (
             <option key={index} value={option.value}>{option.label}</option>
          ))
        }
      </select>
      {
        error && (
          <p class='text-red-500 text-xs italic'>{errorMessage}</p>
        )
      }
    </div>
  )
}

export default Select