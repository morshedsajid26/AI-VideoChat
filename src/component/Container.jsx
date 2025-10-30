import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`md:max-w-[75%] mx-auto ${className}`}>
        {children}
      
    </div>
  )
}

export default Container
