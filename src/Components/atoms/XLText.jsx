import React, { Children } from 'react'

const XLText = ({className='', children}) => {
  return (
    <p className={`${className} text-2xl font-semibold`}>{children}</p>
  )
}

export default XLText