import React from 'react'
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

function TablePagination({
  changePage,
  totalPage,
  currentPage,
  nextPage,
  prevPage,
  ...props
}) {
  const renderPaginationNumber = () => {
    const pageNumbers = []
    for (let i = 1; i<=totalPage; i++) {
      pageNumbers.push(
        <button
         key={i}
         className={`flex items-center justify-center
          px-3 h-8 ms-0 leading-tight
          ${currentPage === i ? 'bg-orange-400 text-white' : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'}
         `}
         onClick={() => changePage(i)}
        >{i}</button>
      )
    }
    return pageNumbers
  }
  return (
    <div className='flex justify-center pt-3'>
      <button
       id='btn_prev'
       className='flex items-center justify-center
       px-2 h-8 ms-0 leading-tight text-gray-500
       bg-white border border-e-0 border-gray-300 rounded-s-lg
       hover:bg-gray-100 hover:text-gray-700
       '
       onClick={prevPage}
      >
        <IoIosArrowBack />
      </button>
      {renderPaginationNumber()}
      <button
       id='btn_prev'
       className='flex items-center justify-center
       px-2 h-8 ms-0 leading-tight text-gray-500
       bg-white border border-gray-300 rounded-e-lg
       hover:bg-gray-100 hover:text-gray-700
       '
       onClick={nextPage}
      >
        <IoIosArrowForward />
      </button>
    </div>
  )
}

export default TablePagination