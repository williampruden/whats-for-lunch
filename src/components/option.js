import React from 'react';

const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">{ props.count }. { props.desc }</p>
      <button
        className='button button--link'
        onClick={(e) => props.handleDeleteOption(props.desc)}>
          Delete
      </button>
    </div>
  )
}

export default Option;
