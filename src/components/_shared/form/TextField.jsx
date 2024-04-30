import React from 'react'
import { useState } from 'react'
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

function TextField({
  id,
  label,
  className,
  value,
  name,
  onChange,
  type = 'text',
  isRequired = false,
  placeholder,
  error,
  errorMessage
}) {
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className={className}>
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
        {label}{isRequired && (<span className='text-[#FF0000]'>*</span>)}
      </label>
      {
        type === 'text' && (
          <input
           className={`shadow appearance-none border rounded w-full py-2 px-3
           text-gray-700 leading-tight focus:outline-none ${error ? 'focus:border-red-500 mb-2' :'focus:border-gray-500'} `}
           id={id}
           value={value}
           name={name}
           onChange={onChange}
           type={type}
           placeholder={placeholder}
          />
        )
      }
      {
        type === 'password' && (
          <div className={`relative w-full container mx-auto ${error ? 'mb-2' : ''}`}>
            <input
             className={`shadow appearance-none border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none ${error ? 'focus:border-red-500' :'focus:border-gray-500'} `}
             id={id}
             value={value}
             name={name}
             onChange={onChange}
             type={showPassword ? 'text' : 'password'}
             placeholder={placeholder}
            />
            <button
             className={`absolute inset-y-0 right-0 flex items-center px-4 text-gray-700`}
             onClick={toggleShowPassword}
            >
              {
                showPassword ? (
                  <IoIosEyeOff className='h-4 w-4'/>
                ) : (
                  <IoIosEye className='h-4 w-4'/>
                )
              }
            </button>
          </div>
        )
      }
      {
        error && (
          <p class='text-red-500 text-xs italic'>{errorMessage}</p>
        )
      }
    </div>
  )
}

export default TextField