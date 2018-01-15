import React from 'react';
import Option from './option'

const Options = (props) => {

  let renderMessage = () => {
    if(!props.options.length) {
      return <p className="widget__message">Please add an option to get started</p>
    }
    return undefined;
  }

  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}>
            Remove All
        </button>
      </div>
      {renderMessage()}
      <div>
        {
          props.options.map((option, index) => (
            <Option
              handleDeleteOption={props.handleDeleteOption}
              key={option}
              count={ index + 1 }
              desc={option}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Options;
