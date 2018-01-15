import React, { Component } from 'react';

import Header from './header'
import AddOption from './addOption'
import Options from './options'
import Action from './action'
import OptionModal from './optionModal'

class IndecisionApp extends Component {
  constructor(props) {
    super(props)

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

    this.state = {
      options: [],
      selectedOption: undefined
    }
  }

  handleModalClose() {
    this.setState((prevState) => {
      return {
        selectedOption: undefined
      }
    })
  }

  handleDeleteOptions() {
    this.setState(() => {
      return { options: [] }
    })
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return optionToRemove !== option
        })
      }
    })
  }

  handlePick() {
    let randomNum = Math.floor(Math.random() * this.state.options.length)
    this.setState((prevState) => {
      return {
        selectedOption: this.state.options[randomNum]
      }
    })
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item'
    }
    else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {
    return (
      <div>

        <Header />

      <div className="container">
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}/>

        <div className="widget">

          <Options
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            options={this.state.options}/>

          <AddOption
            handleAddOption={this.handleAddOption} />
        </div>
      </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleModalClose={this.handleModalClose}/>

      </div>
    )
  }
}

export default IndecisionApp;
