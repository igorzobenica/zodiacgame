import React from "react";
import PropTypes from "prop-types";
import { Modal, Typo } from "../../ui";

const HintsModal = ({ show, text, setShowModal }) => {
  const onDismissHint = () => {
    setShowModal(false);
  };

  return (
    <Modal show={show} onDismiss={onDismissHint}>
      <Modal.Body>
        <Typo.p>{text}</Typo.p>
      </Modal.Body>
    </Modal>
  );
};

HintsModal.propTypes = {};

export default HintsModal;
