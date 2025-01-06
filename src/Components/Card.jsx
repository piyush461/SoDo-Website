import React from 'react'

const Card = ({children}) => {
  return (
    <div className="coverCard rounded-2xl inline-block " >
        {children}
    </div>
  )
}

export default Card