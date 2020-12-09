import React from 'react';
import Image from 'src/common/src/components/Image';
import Box from 'src/common/src/components/Box';
import Heading from 'src/common/src/components/Heading';
import Text from 'src/common/src/components/Text';
import Container from 'src/common/src/components/UI/Container';
import Fade from 'react-reveal/Fade';

import { FeatureTwoWrapper } from './featureTwo.style';

import { FEATURE_TWO_DATA } from 'src/common/src/data/SassMinimal';

import FeatureTwoMoc from 'src/common/src/assets/image/sassMinimal/feature-2-moc.png';

const FeatureTwoSection = () => {
  return (
    <FeatureTwoWrapper>
      <Container>
        <Box className="row">
          <Box className="column">
            <Box className="blockTitle">
              <Text as="p" content="Analytics features" />
              <Heading
                as="h2"
                content="Advanced analytics tools to keep you in control"
              />
            </Box>
            <Box className="featureTwoContent">
              {FEATURE_TWO_DATA.map((feature, index) => (
                <Box className="featureTwoBox" key={`feature-two-${index}`}>
                  <Image src={feature.image} alt="feature box image" />
                  <Heading as="h3" content={feature.title} />
                  <Text as="p" content={feature.content} />
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="column">
            <Fade right>
              <Image src={FeatureTwoMoc} alt="feature two moc" />
            </Fade>
          </Box>
        </Box>
      </Container>
    </FeatureTwoWrapper>
  );
};

export default FeatureTwoSection;
