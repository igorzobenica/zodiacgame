import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Modal, Typo, Button } from "../../ui";
import { sendEmail } from "../../helpers/sendEmail";
import InputFieldWithButton from "../InputFieldWithButton";
import { getLanguageFromPathId } from "../../helpers/getLanguageFromPath";

const StyledText = styled(Typo.P)`
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
  const [showMessage, setShowMessage] = useState(false);
  const [nameValidationError, setNameValidationError] = useState(false);
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const isCorrectEmail = () => {
    const emailVal = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return emailVal.test(emailValue);
  }
  const onDismissHint = () => {
    setShowModal(false);
  };
  const onClick = () => {
    if (!nameValue.length || !isCorrectEmail()) {
      if (!nameValue.length) setNameValidationError(t('p9.modal_name_validation'));
      if (!isCorrectEmail()) setEmailValidationError(t('p9.modal_email_validation'));
    } else {
      const langId = getLanguageFromPathId();
      sendEmail(location, langId, {
        name: nameValue,
        email: emailValue,
      });
      setShowMessage(true);
    }
  };
  const onEnter = () => (!!nameValue) && (!!emailValue) ? onClick : null;
  return (
    <Modal show={show} onDismiss={onDismissHint} isLarge={true}>
      <Modal.Body autoSize>
        {showMessage &&
          <>
            <Typo.P>{t("p9.modal_thank_you_message")}{'\n'}
              <StyledLink href="https://foxinabox.re/franchise">
                {t("common.go_back_to_homepage")}
              </StyledLink>
            </Typo.P>
          </>
        }
        {!showMessage &&
          <>
            <Typo.P>{t("p9.modal_email_message")}</Typo.P>
            <InputFieldWithButton
              label={t("common.label_name")}
              width="100%"
              inputValue={nameValue}
              setInputValue={setNameValue}
              placeholder={t("common.placeholder_name")}
              validationError={nameValidationError}
              setValidationError={setNameValidationError}
              onEnter={onEnter()}
            />
            <InputFieldWithButton
              label={t("common.label_email")}
              type="email"
              width="100%"
              inputValue={emailValue}
              setInputValue={setEmailValue}
              placeholder={t("common.placeholder_email")}
              validationError={emailValidationError}
              setValidationError={setEmailValidationError}
              onEnter={onEnter()}
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
          </>
        }
      </Modal.Body>
    </Modal>
  );
};

HintsModal.propTypes = {};

export default HintsModal;
