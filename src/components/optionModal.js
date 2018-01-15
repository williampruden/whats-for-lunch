import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {

  return (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleModalClose}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      ariaHideApp={false}
      className="modal--custom"
    >
      <h3 className="modal__title">Selected Option</h3>
      <p className="modal__body">{props.selectedOption}</p>
      <button
        className="button"
        onClick={props.handleModalClose}>
          Okay
      </button>
    </Modal>
  )
}

export default OptionModal;
