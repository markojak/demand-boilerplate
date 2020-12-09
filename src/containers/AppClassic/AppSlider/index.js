import React, { Fragment } from 'react';
import Text from 'src/common/src/components/Text';
import Image from 'src/common/src/components/Image';
import Heading from 'src/common/src/components/Heading';
import Container from 'src/common/src/components/UI/Container';
import FeatureBlock from 'src/common/src/components/FeatureBlock';
import GlideCarousel from 'src/common/src/components/GlideCarousel';
import GlideSlide from 'src/common/src/components/GlideCarousel/glideSlide';
import SectionWrapper, { CarouseWrapper, TextWrapper } from './appSlider.style';

import { appSlider } from 'src/common/src/data/AppClassic';

const AppSlider = () => {
  const { title, description, features, carousel } = appSlider;

  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 1,
    animationDuration: 700,
  };

  return (
    <SectionWrapper>
      <Container>
        <CarouseWrapper>
          <GlideCarousel
            bullets={true}
            controls={false}
            numberOfBullets={3}
            options={glideOptions}
            carouselSelector="appFeatureSlider"
          >
            <Fragment>
              {carousel.map((item) => (
                <GlideSlide key={`feature-side--key${item.id}`}>
                  <Image src={item.image} alt={item.title} />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </CarouseWrapper>
        <TextWrapper>
          <Heading content={title} />
          <Text content={description} />
          {features.map((item) => (
            <FeatureBlock
              key={`app-feature--key${item.id}`}
              iconPosition="left"
              icon={<i className={item.icon}></i>}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))}
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AppSlider;
