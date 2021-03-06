import React from 'react';
import Text from 'src/common/src/components/Text';
import Image from 'src/common/src/components/Image';
import Heading from 'src/common/src/components/Heading';
import Container from 'src/common/src/components/UI/Container';
import FeatureBlock from 'src/common/src/components/FeatureBlock';
import { SectionHeader } from '../app-minimal.style';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './choose-us.style';

import { chooseUs } from 'src/common/src/data/AppMinimal';

const ChooseUs = () => {
  const { title, description, thumbnail, features } = chooseUs;
  return (
    <SectionWrapper>
      <Container>
        <ThumbWrapper>
          <Image src={thumbnail} alt="Choose Thumbnail" />
        </ThumbWrapper>

        <TextWrapper>
          <SectionHeader className="section-header-two">
            <Heading content={title} />
            <Text content={description} />
          </SectionHeader>

          {features.map((item) => (
            <FeatureBlock
              key={`app-feature--key${item.id}`}
              iconPosition="left"
              icon={<Text as="span" content={'0' + item.id} />}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))}
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ChooseUs;
