import React, { PropsWithChildren } from 'react'

const Tag: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded border p-1 text-sm leading-4 no-underline border-neutral-700 bg-neutral-800 text-neutral-100">
      {children}
    </span>
  )
}

export default Tag
