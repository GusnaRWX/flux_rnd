import { useState } from "react"

export const useForm = (
  initialValues,
  validateOnChange = false,
  validate
) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })

    if (validateOnChange) {
      validate({ [name]: value })
    }
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
  }

  const resetField = (name, value) => {
    setValues({
      ...values,
      [name]: value
    })
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetField,
    resetForm
  }
}