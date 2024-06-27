import React, { PropsWithChildren } from 'react'

const Underline: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <span className="underline decoration-gray-500 underline-offset-2">
      {children}
    </span>
  )
}

export default Underline
