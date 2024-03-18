import React from 'react'
import classnames from "classnames"

const Button = ({children, className, ...rest}) => {
  let buttonClass = 'w-full text-center py-3 text-white rounded'
  const allClasses = classnames(buttonClass, className)
  return (
    <div>
        <button className={allClasses} {...rest}>
          {children}
        </button>
    </div>
  )

}

export default Button