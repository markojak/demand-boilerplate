import React, { Fragment } from 'react';
import Text from 'src/common/src/components/Text';
import Heading from 'src/common/src/components/Heading';
import Image from 'src/common/src/components/Image';
import Container from 'src/common/src/components/UI/Container';
import FeatureBlock from 'src/common/src/components/FeatureBlock';
import { SectionHeader } from '../app-minimal.style';
import SectionWrapper, { FeatureWrapper } from './features.style';

import { features } from 'src/common/src/data/AppMinimal';

const Features = () => {
  const { title, description, items } = features;

  return (
    <SectionWrapper id="service_section">
      <Container>
        <SectionHeader className="text-white">
          <Heading content={title} />
          <Text content={description} />
        </SectionHeader>
        <FeatureWrapper>
          {items.map((item) => (
            <FeatureBlock
              key={`feature-key${item.id}`}
              icon={<Image src={item.icon} alt={item.title} />}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
