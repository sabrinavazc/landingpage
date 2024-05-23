import React from 'react';

type Props = {
    children: React.ReactNode
}

export function Container({ children }: Props) {
  return(
    <div className="flex items-center w-full mx-auto px-4 lg:px-[220px]">
        {children}
    </div>
  )
}
