import React from 'react'

const MText = ({children, className=''}) => {
  return (
    <p className={`${className} text-[18px]`}>{children}</p>
  )
}

export default MText