import React from 'react';
import Text from 'src/common/src/components/Text';
import Heading from 'src/common/src/components/Heading';
import BlogPost from 'src/common/src/components/BlogPost';
import Container from 'src/common/src/components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from './featureSection.style';

import { featureData } from 'src/common/src/data/Charity';

const FeatureSection = () => {
  const { title, slogan, features } = featureData;

  return (
    <SectionWrapper id="feature">
      <Container width="1260px">
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <FeatureWrapper>
          {features.map((item) => (
            <BlogPost
              key={`option_key${item.id}`}
              thumbUrl={item.icon}
              title={item.title}
              excerpt={item.description}
            />
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureSection;
