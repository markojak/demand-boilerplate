import React from 'react';
import Link from 'next/link';
import Image from 'src/common/src/components/Image';
import Box from 'src/common/src/components/Box';
import Heading from 'src/common/src/components/Heading';
import Text from 'src/common/src/components/Text';
import Container from 'src/common/src/components/UI/Container';
import { FeatureSectionWrapper } from './featureSection.style';
import FeatureCheckImage from 'src/common/src/assets/image/sassMinimal/feature-check-icon.png';

import { FEATURE_DATA } from 'src/common/src/data/SassMinimal';

const FeatureSection = () => {
  return (
    <FeatureSectionWrapper id="feature_section">
      <Container>
        <Box className="row">
          {FEATURE_DATA.map((feature, index) => (
            <Box className="featureSingle" key={`feature-one-${index}`}>
              <Box className="featureSingleInner">
                <Image src={FeatureCheckImage} alt="Feature check Image" />
                <Heading as="h3" content={feature.title} />
                <Text as="p" content={feature.text} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
