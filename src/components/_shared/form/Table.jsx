import React, {useState} from 'react'
import { TableHead, TableRow, TableBody, TableCell, Select, TablePagination } from '.'
import PropTypes from 'prop-types'
import { limitOptions } from '@/utils/helpers'

function Table({
  header,
  body,
  data,
  withPagination = false
}) {
  const [limitPerPage, setLimitPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / limitPerPage)
  const startIndex = (currentPage - 1) * limitPerPage + 1
  const endIndex = Math.min(startIndex + limitPerPage - 1, data.length)


  const handleChangeLimit = (e) => {
    setLimitPerPage(e.target.value)
  }

  const handleChangePage = (val) => {
    setCurrentPage(val)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }
  return (
    <div className='py-4 w-full'>
      <div className='shadow overflow-hidden rounded border-b border-gray-200'>
        <table className='min-w-full bg-white border'>
         <TableHead>
          <TableRow>
            {
              header.map((item) => (
                <th key={item?.id} className={`${item?.id === 'actions' ? 'text-right' : 'text-left'} px-4 py-4 font-semibold text-sm`}>{item.label}</th>
              ))
            }
          </TableRow>
         </TableHead>
         <TableBody>
          {body}
         </TableBody>
        </table>
        {
          withPagination && (
            <div className='py-4 px-2 flex flex-row items-center justify-between'>
              <div className='flex flex-row items-center justify-between' style={{ width: '220px' }}>
                <Select
                 id='input_limit'
                 name='limitPerPage'
                 value={limitPerPage}
                 onChange={handleChangeLimit}
                 options={limitOptions}
                />
                <span className='text-xs pt-1'>
                  Showing
                  <span className='font-semibold'>&nbsp;{startIndex}</span> to <span className='font-semibold'>{endIndex}&nbsp;</span>
                  of <span className='font-semibold'>{data.length}</span> results
                </span>
              </div>
              <div>
                <TablePagination
                 nextPage={nextPage}
                 prevPage={prevPage}
                 totalPage={totalPages}
                 currentPage={currentPage}
                 changePage={handleChangePage}
                />
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

Table.propTypes = {
  header: PropTypes.array,
  body: PropTypes.node,
  withPagination: PropTypes.bool,
  data: PropTypes.any
}

export default Table