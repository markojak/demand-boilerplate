import React from 'react';
import Text from 'src/common/src/components/Text';
import Heading from 'src/common/src/components/Heading';
import Button from 'src/common/src/components/Button';
import Image from 'src/common/src/components/Image';
import Container from 'src/common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';

import { designAndBuilt } from 'src/common/src/data/AppClassic';

const DesignedAndBuilt = () => {
  const { image, title, description } = designAndBuilt;

  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={image} alt="Built Logo" />
          </div>
          <div className="content">
            <Heading content={title} />
            <Text content={description} />
            <Button title="Learn More" />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
