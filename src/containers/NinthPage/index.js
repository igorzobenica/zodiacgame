import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { getLocationList } from "../../helpers/getLocationList";
import FormModal from "../../components/FormModal";
import { Typo, Page, Button } from "../../ui";
import { Page1Background as image, Page1BackgroundSmall as imageSmall } from "../../ui/Background";
import { loadImage } from "../../helpers/loadImage";
import LocationSelectors from "../../components/LocationSelectors";
import { MEDIA_SMALL } from "../../ui/theme/tokens/breakpoints";

const PageWrapper = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
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

const FormWrapper = styled.div`
  
`;

const NinthPage = props => {
  const { t } = useTranslation();
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [locationList, setLocationList] = useState(null);
  const [show, setShowModal] = useState(false);
  const [location, setLocation] = useState(null);
  const [showForm, setShowForm] = useState(false);
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
        <Typo.p>{t('p9.main')}</Typo.p>
        {showForm && 
        <>
          <FormWrapper>
          <Typo.p>{t('p9.sub')}</Typo.p>
            <LocationSelectors 
              location={location}
              setLocation={setLocation}
              locationList={locationList}
            >
              <Button onClick={onClick} disabled={!location}>{t('common.next')}</Button>
            </LocationSelectors>
          </FormWrapper>
        </>
        }
        {!showForm && <ButtonsWrapper>
          <Button onClick={() => {}}>{t('p9.button_no')}</Button>
          <Button onClick={() => {setShowForm(true)}}>{t('p9.button_yes')}</Button>
        </ButtonsWrapper>}
        <FormModal show={show} setShowModal={setShowModal} location={location ? location.value : null}/>
      </Page>
    </PageWrapper>
  );
};

export default NinthPage;
