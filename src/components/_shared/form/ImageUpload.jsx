import React, { useState } from 'react'
import Image from 'next/image'
import { IoMdCloudUpload, IoIosCloseCircleOutline  } from 'react-icons/io'

function ImageUpload({
  value,
  onChange,
  id,
  name,
  isRequired = false,
  label,
  className,
  ...props
}) {
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState('No Selected File')
  const handleClick = () => {
    document.querySelector('.file-upload').click()
  }
  const handleChange = (e) => {
    setFileName(e.target.files[0])
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]) || null)
      console.log(convertChange(name, e.target.files[0]))
      onChange(convertChange(name, e.target.files[0]))
    }
  }

  const convertChange = (name, val) => {
    return {
      target: {
        name,
        value: val
      }
    }
  }

  const handleDeleteImage = () => {
    setFileName('No Selected File')
    setImage(null)
    onChange(convertChange(name, []))
  }
  return (
    <div className={className}>
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
        {label}{isRequired && (<span className='text-[#FF0000]'>*</span>)}
      </label>
      <div
       className='flex flex-col items-center justify-center border-2 border-dashed border-orange-500 cursor-pointer w-full rounded-md h-80'
      >
        <input id={id} name={name} type='file' accept='image/*' onChange={(e) => handleChange(e)} className='file-upload' hidden/>
        {
          image ?
            <div className='w-full h-full relative flex items-center justify-center'>
              <IoIosCloseCircleOutline color='#FF0000' onClick={handleDeleteImage} className='h-10 w-10 absolute top-2 right-2 '/>
               <Image src={image} alt='image' width={300} height={300}/>
            </div>
            :
            <div onClick={handleClick} className='flex flex-col items-center justify-center'>
              <IoMdCloudUpload color='#ff6e00' size={60} />
              <span>Click here to browse file</span>
            </div>
        }
      </div>
    </div>
  )
}

export default ImageUpload