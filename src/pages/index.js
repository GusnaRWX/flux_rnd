import Layout from "@/components/_shared/core/Layout/Index"
import {
  TextField,
  Button,
  Datepicker,
  DateRangePicker,
  ImageUpload,
  Select,
  MultiSelect,
  Table,
  TableRow,
  TableCell,
  Dropdown
} from "@/components/_shared/form"
import { useState } from "react"
import { useForm } from "@/hooks"
import { datePickerConvertChange, isStriped } from "@/utils/helpers"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { FaEdit, FaRegEye, FaTrashAlt } from "react-icons/fa"

export default function Home () {
  const [initialValues, setInitialValues] = useState({
    name: '',
    password: '',
    date: '',
    range_date: [],
    religion: '',
    interest: [],
    image: []
  })

  const headerItem = [
    { id: 'name', label: 'Name' },
    { id: 'last_name', label: 'Last Name' },
    { id: 'phone', label: 'Phone' },
    { id: 'email', label: 'Email' },
    { id: 'actions', label: 'Actions' }
  ]

  const sampleData = [
    {
      id: 1,
      name: 'Gusna',
      last_name: 'Ap',
      phone: '087823628047',
      email: 'monsto@gmail.com'
    },
    {
      id: 2,
      name: 'Gusna',
      last_name: 'Ap',
      phone: '087823628047',
      email: 'monsto@gmail.com'
    },
    {
      id: 3,
      name: 'Gusna',
      last_name: 'Ap',
      phone: '087823628047',
      email: 'monsto@gmail.com'
    },
    {
      id: 4,
      name: 'Gusna',
      last_name: 'Ap',
      phone: '087823628047',
      email: 'monsto@gmail.com'
    },
    {
      id: 5,
      name: 'Gusna',
      last_name: 'Ap',
      phone: '087823628047',
      email: 'monsto@gmail.com'
    },
  ]

  const religionOptions = [
    {
      label: 'Islam',
      value: 'islam'
    },
    {
      label: 'Kristen',
      value: 'kristen'
    },
    {
      label: 'Buddha',
      value: 'buddha'
    },
    {
      label: 'Hindu',
      value: 'hindu'
    },
  ]

  const interestOptions = [
    {
      id: 1,
      label: 'Film',
      value: 'film'
    },
    {
      id: 2,
      label: 'Game',
      value: 'game'
    },
    {
      id: 3,
      label: 'Sports',
      value: 'sports'
    },
    {
      id: 4,
      label: 'Academy',
      value: 'academy'
    },
  ]
  const validate = (fieldOfValues = values) => {
    const temp = { ...errors }
    if ('name' in fieldOfValues)
      temp.name = fieldOfValues.name ? '' : 'Please Input name'

    if ('password' in fieldOfValues)
      temp.password = fieldOfValues.password ? '' : 'Please Input Password'
    if ('date' in fieldOfValues)
      temp.date = fieldOfValues.date ? '' : 'Please Input Password'
    if ('religion' in fieldOfValues)
      temp.religion = fieldOfValues.religion ? '' : 'Please Input Religion'
    if ('interest' in fieldOfValues)
      temp.interest = fieldOfValues.interest ? '' : 'Please Input Interest'

    setErrors({
      ...temp
    })

    if (fieldOfValues === values)
      return Object.values(temp).every(x => x === '')
  }
  const {
    values,
    errors,
    setErrors,
    handleInputChange
  } = useForm(initialValues, true, validate)
  return (
    <Layout>
      <div className="bg-white rounded-lg p-4 w-full">
        <TextField
          id='input_name'
          label='Name'
          className='mb-4'
          value={values.name}
          onChange={handleInputChange}
          name='name'
          placeholder='example'
          type="text"
          isRequired={true}
          error={errors.name ? true : false}
          errorMessage={errors.name}
        />
        <TextField
          id='input_password'
          label='Password'
          className='mb-4'
          value={values.password}
          onChange={handleInputChange}
          name='password'
          placeholder='Password'
          type="password"
          isRequired={true}
          error={errors.password ? true : false}
          errorMessage={errors.password}
        />
        <Datepicker
          id='input_date'
          className='mb-4'
          name='date'
          value={values.date}
          onChange={(e) => handleInputChange(datePickerConvertChange('date', e))}
          label='Date'
          isRequired={true}
        />
        <DateRangePicker
          id='input_daterange'
          name='range_date'
          onChange={(e) => console.log(e)}
          label='Date Range'
          isRequired={true}
        />
        <Select
          id='input_religion'
          className='mb-4 mt-4'
          name='religion'
          label={'Religion'}
          value={values.religion}
          onChange={handleInputChange}
          isRequired={true}
          options={religionOptions}
          error={errors.religion ? true : false}
          errorMessage={errors.religion}
        />
        <MultiSelect
          id='input_interest'
          className='mb-4 mt-4'
          name='interest'
          label='Interest'
          value={values.interest}
          onChange={handleInputChange}
          isRequired={true}
          options={interestOptions}
          error={errors.interest ? true : false}
          errorMessage={errors.interest}
        />
        <ImageUpload
          name='image'
          id='input_image'
          value={values.image}
          label='Images'
          isRequired={true}
          onChange={handleInputChange}
        />
        <h4 className="mt-4 mb-4 font-bold">Button Contained Variant</h4>
        <div className="flex flex-row items-center justify-start gap-4">
          <Button
            id='btn_primary'
            onClick={() => console.log('test')}
            variant='contained-primary'
            className='mb-4'
            text='Contained Primary'
          />
          <Button
            id='btn_secondary'
            onClick={() => console.log('test')}
            variant='contained-secondary'
            className='mb-4'
            text='Contained Secondary'
          />
          <Button
            id='btn_warning'
            onClick={() => console.log('test')}
            variant='contained-warning'
            className='mb-4'
            text='Contained Warning'
          />
          <Button
            id='btn_success'
            onClick={() => console.log('test')}
            variant='contained-success'
            className='mb-4'
            text='Contained Success'
          />
          <Button
            id='btn_danger'
            onClick={() => console.log('test')}
            variant='contained-danger'
            className='mb-4'
            text='Contained Danger'
          />
        </div>
        <h4 className="mt-4 mb-4 font-bold">Button Outlined Variant</h4>
        <div className="flex flex-row items-center justify-start gap-4">
          <Button
            id='btn_outlined_primary'
            onClick={() => console.log('test')}
            variant='outlined-primary'
            className='mb-4'
            text='Outlined Primary'
          />
          <Button
            id='btn_outlined_secondary'
            onClick={() => console.log('test')}
            variant='outlined-secondary'
            className='mb-4'
            text='Outlined Secondary'
          />
          <Button
            id='btn_outlined_warning'
            onClick={() => console.log('test')}
            variant='outlined-warning'
            className='mb-4'
            text='Outlined Warning'
          />
          <Button
            id='btn_outlined_success'
            onClick={() => console.log('test')}
            variant='outlined-success'
            className='mb-4'
            text='Outlined Success'
          />
          <Button
            id='btn_outlined_danger'
            onClick={() => console.log('test')}
            variant='outlined-danger'
            className='mb-4'
            text='Outlined Danger'
          />
        </div>
        <h4 className="mt-4 mb-4 font-bold">Button Contained Variant</h4>
        <div className="flex flex-row items-center justify-start gap-4">
          <Button
            id='btn_primary'
            onClick={() => console.log('test')}
            variant='contained-primary'
            className='mb-4'
            disabled={true}
            text='Contained Primary'
          />
          <Button
            id='btn_secondary'
            onClick={() => console.log('test')}
            variant='contained-secondary'
            className='mb-4'
            disabled={true}
            text='Contained Secondary'
          />
          <Button
            id='btn_warning'
            onClick={() => console.log('test')}
            variant='contained-warning'
            className='mb-4'
            disabled={true}
            text='Contained Warning'
          />
          <Button
            id='btn_success'
            onClick={() => console.log('test')}
            variant='contained-success'
            className='mb-4'
            disabled={true}
            text='Contained Success'
          />
          <Button
            id='btn_danger'
            onClick={() => console.log('test')}
            variant='contained-danger'
            className='mb-4'
            disabled={true}
            text='Contained Danger'
          />
        </div>
        <h4 className="mt-4 mb-4 font-bold">Button Full width</h4>
        <div className="flex flex-col gap-4">
          <Button
            id='btn_primary'
            onClick={() => console.log('test')}
            variant='contained-primary'
            className='mb-4'
            fullWidth={true}
            text='Contained Primary'
          />
          <Button
            id='btn_secondary'
            onClick={() => console.log('test')}
            variant='contained-secondary'
            className='mb-4'
            fullWidth={true}
            text='Contained Secondary'
          />
          <Button
            id='btn_warning'
            onClick={() => console.log('test')}
            variant='contained-warning'
            className='mb-4'
            fullWidth={true}
            text='Contained Warning'
          />
          <Button
            id='btn_success'
            onClick={() => console.log('test')}
            variant='contained-success'
            className='mb-4'
            fullWidth={true}
            text='Contained Success'
          />
          <Button
            id='btn_danger'
            onClick={() => console.log('test')}
            variant='contained-danger'
            className='mb-4'
            fullWidth={true}
            text='Contained Danger'
          />
          <Button
            id='btn_outlined_primary'
            onClick={() => console.log('test')}
            variant='outlined-primary'
            className='mb-4'
            fullWidth={true}
            text='Outlined Primary'
          />
          <Button
            id='btn_outlined_secondary'
            onClick={() => console.log('test')}
            variant='outlined-secondary'
            className='mb-4'
            fullWidth={true}
            text='Outlined Secondary'
          />
          <Button
            id='btn_outlined_warning'
            onClick={() => console.log('test')}
            variant='outlined-warning'
            className='mb-4'
            fullWidth={true}
            text='Outlined Warning'
          />
          <Button
            id='btn_outlined_success'
            onClick={() => console.log('test')}
            variant='outlined-success'
            className='mb-4'
            fullWidth={true}
            text='Outlined Success'
          />
          <Button
            id='btn_outlined_danger'
            onClick={() => console.log('test')}
            variant='outlined-danger'
            className='mb-4'
            fullWidth={true}
            text='Outlined Danger'
          />
        </div>
        <Table
          header={headerItem}
          data={sampleData}
          withPagination={true}
          body={
            sampleData.map((item, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-orange-200' : 'bg-white'}>
                <TableCell className='text-left py-4 px-4'>{item?.name}</TableCell>
                <TableCell className='text-left py-4 px-4'>{item?.last_name}</TableCell>
                <TableCell className='text-left py-4 px-4'>{item?.phone}</TableCell>
                <TableCell className='text-left py-4 px-4'>{item?.email}</TableCell>
                <TableCell className='text-right py-4 px-4'>
                  <Dropdown
                    label={
                      <BiDotsVerticalRounded />
                    }
                    body={
                      <>
                        <span className="flex flex-row items-center hover:bg-zinc-100 p-2 rounded-lg gap-4">
                          <FaEdit className="text-blue-600" />
                          <p>Edit</p>
                        </span>
                        <span className="flex flex-row items-center hover:bg-zinc-100 p-2 rounded-lg gap-4">
                          <FaRegEye className="text-green-600" />
                          <p>Detail</p>
                        </span>
                        <span className="flex flex-row items-center hover:bg-zinc-100 p-2 rounded-lg gap-4">
                          <FaTrashAlt className="text-red-600" />
                          <p>Delete</p>
                        </span>
                      </>
                    }
                  />
                </TableCell>
              </TableRow>
            ))
          }
        />
      </div>
    </Layout>
  )
}
