import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { getLocationList } from "../../helpers/getLocationList";
import FormModal from "../../components/FormModal";
import { Typo, Page, Button } from "../../ui";
import { Page9Background as image, Page6Background, Page9BackgroundSmall as imageSmall } from "../../ui/Background";
import { loadImage } from "../../helpers/loadImage";
import LocationSelectors from "../../components/LocationSelectors";
import { MEDIA_SMALL } from "../../ui/theme/tokens/breakpoints";

const PageWrapper = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
  background-position: 50% 20% !important;
  @media (max-width: ${MEDIA_SMALL}px) , (max-height: ${MEDIA_SMALL}px) {
    background-image: url(${Page6Background});
  }
`;

const ButtonsWrapper = styled.div`
  @media (min-width: ${MEDIA_SMALL}px) {
    > button {
      &:last-child {
        margin-left: 5rem;
      }
    }
  }
`;

const StyledLink = styled.a`
  color: #ab0000;
`;

const NinthPage = props => {
  const { t } = useTranslation();
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [locationList, setLocationList] = useState(null);
  const [show, setShow] = useState('text');
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState(null);
  useEffect(() => {
    getLocationList(setLocationList);
    loadImage(image, setIsImgLoaded);
  }, []);
  const onClick = () => {
    setShowModal(true);
  };
  return (
    <PageWrapper isImgLoaded={isImgLoaded}>
      <Page>
        {(show === 'text') && 
          <>
            <Typo.p>{t('p9.main')}</Typo.p>
            <ButtonsWrapper>
              <Button onClick={() => {setShow('no')}}>{t('p9.button_no')}</Button>
              <Button onClick={() => {setShow('yes')}} disabled={!locationList}>{t('p9.button_yes')}</Button>
            </ButtonsWrapper>
          </>
        }
        {(show === 'yes') && 
          <div>
            <Typo.p>{t('p9.yes_message')}</Typo.p>
            <LocationSelectors 
              location={location}
              setLocation={setLocation}
              locationList={locationList}
            >
              <Button onClick={onClick} disabled={!location}>{t('common.next')}</Button>
            </LocationSelectors>
          </div>
        }
        {(show === 'no') && 
          <>
            <Typo.p>{t('p9.no_message')}</Typo.p>
            <StyledLink href="https://foxinabox.re/franchise">
              {t("common.go_back_to_homepage")}
            </StyledLink>
          </>
        }
        <FormModal show={showModal} setShowModal={setShowModal} location={location ? location.value : null}/>
      </Page>
    </PageWrapper>
  );
};

export default NinthPage;
