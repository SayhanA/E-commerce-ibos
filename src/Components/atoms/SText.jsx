import React from 'react'

const SText = ({className='', children}) => {
  return (
    <p className={`${className} text-[12px]`}>{children}</p>
  )
}

export default SText