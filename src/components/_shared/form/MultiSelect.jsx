import React from 'react'
import Select from 'react-select'
const colourStyle = (error) => {
  return {
      control: (styles, { isFocused }) => {
    return {
      ...styles,
      boxShadow: '1px 1px 1px .2px #f1f1f1',
      borderColor: isFocused ? 'rgb(107 114 128 / 1)' : (error ? '#FF0000' : ''),
      ':hover': {
        borderColor: isFocused ? 'rgb(107 114 128 / 1)' : (error ? '#FF000' : '')
      }
    }
  },
  multiValue: (styles) => {
    return {
      ...styles,
    backgroundColor: '#ff8a59'
    }
  },
  multiValueLabel: (styles) => {
    return {
      ...styles,
    color: '#FFFFFF'
    }
  },
  multiValueRemove: (styles) => {
    return {
      ...styles,
    color: '#FFFFFF'
    }
  }
  }
}

function MultiSelect({
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
  const handleChange = (e) => {
    return {
      target: {
        name,
        value: e
      }
    }
  }
  return (
    <div className={className}>
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
        {label}{isRequired && (<span className='text-[#FF0000]'>*</span>)}
      </label>
      <Select
       instanceId={id}
       name={name}
       isMulti
       closeMenuOnSelect={true}
       defaultValue={value}
       onChange={(e) => onChange(handleChange(e))}
       options={options}
       styles={colourStyle(error)}
      />
      {
        error && (
          <p className='text-red-500 text-xs italic'>{errorMessage}</p>
        )
      }
    </div>
  )
}

export default MultiSelect