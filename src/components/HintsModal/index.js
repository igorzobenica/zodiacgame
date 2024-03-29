import React from "react";
import { Modal, Typo } from "../../ui";

const HintsModal = ({ show, text, setShowModal, textCenter, children }) => {
  const onDismissHint = () => {
    setShowModal(false);
  };

  return (
    <Modal show={show} onDismiss={onDismissHint}>
      <Modal.Body textCenter={textCenter}>
        <Typo.P>{text}</Typo.P>
        {children}
      </Modal.Body>
    </Modal>
  );
};

HintsModal.propTypes = {};

export default HintsModal;
