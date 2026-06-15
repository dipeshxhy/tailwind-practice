import React from 'react'

const Button = ({ children ,classes}) => {
  return (
    <button className={` px-2.5 py-2 bg-green-500 text-lg text-white ${classes} `}>{children}</button>
  )
}

export default Button