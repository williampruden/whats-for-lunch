import React, { Component } from 'react';

class AddOption extends Component {
  constructor(props) {
    super(props)

    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error
      }
    })

    e.target.elements.option.value = '';
  }

  renderError() {
    if(this.state.error) {
      return <p className="add-option-error">{this.state.error}</p>
    }
  }

  render() {
    return (
      <div>
        {this.renderError()}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type='text' name='option' />
          <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}

export default AddOption;
