import React from 'react'

const HiddenInput = (props) => {
  return (
    <div className='input-group'>
        <button 
            type="button"
            className='input-group-text'
        >
            <i className='fas fa-eye${propss.showValue? "" : "-slash"}'></i>
        </button>
        <input 
            type="${!props.showValue ? 'password' : 'text'}"
            className='form-control' 
            value="props.inputValue"
            placeholder="${props.placeholder}"
        />
    </div>
  )
}

export default HiddenInput