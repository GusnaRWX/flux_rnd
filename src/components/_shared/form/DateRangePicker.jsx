import React, {useState, useRef, forwardRef} from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { FiCalendar } from 'react-icons/fi';
import PropTypes from 'prop-types'

const CustomInput = forwardRef((props, ref) => {
  console.log(ref)
  const [start, end] = props.value.split(' - ')
  return (
    <div
     className={`shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700
     leading-tight focus:outline-none hover:border-gray-500 flex items-center justify-start gap-8`}
     ref={ref}
     onClick={props?.onClick}
    >
      <div className='flex items-center justify-start w-1/2 gap-8'>
        {start || '-'}
        <AiOutlineSwapRight size={20}/>
        {end || '-'}
      </div>
      <div className='flex items-center justify-end w-1/2'>

        <FiCalendar size={20}/>
      </div>
    </div>
  )
})
CustomInput.displayName = 'CustomInput'

function DateRangePicker({
  id,
  name,
  label,
  onChange,
  className,
  isRequired = false,
  ...props
}) {
  const customRef = useRef(null)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const handleChangeDate = (date) => {
    const [start, end] = date
    setStartDate(start)
    setEndDate(end)
    onChange(date)
  }
  return (
    <div className={className}>
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
        {label}{isRequired && (<span className='text-[#FF0000]'>*</span>)}
      </label>
      <ReactDatePicker
       dateFormat='YYYY-MM-DD'
       selected={startDate}
       id={id}
       startDate={startDate}
       endDate={endDate}
       selectsRange
       onChange={handleChangeDate}
       customInput={<CustomInput customRef={customRef}/>}
      />
    </div>
  )
}

export default DateRangePicker