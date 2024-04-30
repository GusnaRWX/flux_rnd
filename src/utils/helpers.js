import dayjs from "dayjs"

export const datePickerConvertChange = (name, value) => {
  return {
    target: {
      name: name,
      value: dayjs(value).format('YYYY-MM-DD')
    }
  }
}

export const isStriped = (val) => {
  if (val % 2 === 0) {
    return 'bg-cyan-500'
  } else {
    return 'bg-white'
  }
}

export const limitOptions = [
  {
    label: '10',
    value: 10
  },
  {
    label: '25',
    value: '25'
  },
  {
    label: '50',
    value: 50
  },
  {
    label: '100',
    value: 100
  }
]