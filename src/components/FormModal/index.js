import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Modal, Typo, Button } from "../../ui";
import { sendEmail } from "../../helpers/sendEmail";
import InputFieldWithButton from "../InputFieldWithButton";

const StyledText = styled(Typo.p)`
  font-size: 1rem;
`;

const StyledLink = styled.a`
  color: #ab0000;
`;

const ButtonsWrapper = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const HintsModal = ({ show, setShowModal, location }) => {
  const { t } = useTranslation();
  const [validationError, setValidationError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const isCorrectEmail = () => {
    const emailVal = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return emailVal.test(inputValue);
  }
  const onDismissHint = () => {
    setShowModal(false);
  };
  const onClick = () => {
    if (isCorrectEmail()) {
      sendEmail(location, 1, inputValue);
    } else {
      setValidationError(t('p9.modal_email_validation'));
    }
    
  };
  return (
    <Modal show={show} onDismiss={onDismissHint}>
      <Modal.Body autoSize>
        <Typo.p>{t("p9.sub")}</Typo.p>
        <InputFieldWithButton
          type="email"
          width="100%"
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeholder={t("common.placeholder_email")}
          validationError={validationError}
          setValidationError={setValidationError}
          onEnter={inputValue && onClick}
        />
        <ButtonsWrapper>
          <Button onClick={onClick}>{t('common.submit')}</Button>
        </ButtonsWrapper>
        <StyledText>
          {t("p9.modal_opt_out")}{" "}
          <StyledLink href={`${location}/tos`} target="_blank">
            {t("common.terms_and_conditions")}
          </StyledLink>{" "}
          {t("common.and")}{" "}
          <StyledLink href={`${location}/privacy`} target="_blank">{t("common.privacy_policy")}</StyledLink>
        </StyledText>
      </Modal.Body>
    </Modal>
  );
};

HintsModal.propTypes = {};

export default HintsModal;
