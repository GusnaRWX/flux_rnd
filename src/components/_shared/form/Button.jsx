import React from 'react'
import PropTypes from 'prop-types'

function Button({
  id,
  type = 'button',
  onClick,
  variant,
  disabled = false,
  className,
  fullWidth = false,
  text,
  ...props
}) {
  const checkVariant = (val) => {
    switch(val) {
      case 'contained-primary':
        return 'btn-contained-primary';
        break;
      case 'contained-secondary':
        return 'btn-contained-secondary';
        break;
      case 'contained-warning':
        return 'btn-contained-warning';
        break;
      case 'contained-success':
        return 'btn-contained-success';
        break;
      case 'contained-danger':
        return 'btn-contained-danger';
        break;
      case 'outlined-primary':
        return 'btn-outlined-primary';
        break;
      case 'outlined-secondary':
        return 'btn-outlined-secondary';
        break;
      case 'outlined-warning':
        return 'btn-outlined-warning';
        break;
      case 'outlined-success':
        return 'btn-outlined-success';
        break;
      case 'outlined-danger':
        return 'btn-outlined-danger';
        break;
      default:
        return 'btn-contained-primary'
    }
  }
  return (
    <button
     id={id}
     className={`${className} ${checkVariant(variant)} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
     type={type}
     onClick={onClick}
     disabled={disabled}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  text: PropTypes.string || PropTypes.node,
  fullWidth: PropTypes.bool
}

export default Button