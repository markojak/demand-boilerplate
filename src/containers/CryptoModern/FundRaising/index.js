import React from 'react';
import Text from 'src/common/src/components/Text';
import Heading from 'src/common/src/components/Heading';
import Image from 'src/common/src/components/Image';
import Container from 'src/common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './fundRaising.style';
import FundGraphImg from 'src/common/src/assets/image/cryptoModern/fund-graph.png';
import GraphFeatureImg from 'src/common/src/assets/image/cryptoModern/graph-feature.png';

const DesignedAndBuilt = () => {
  return (
    <SectionWrapper id="fund">
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={FundGraphImg} alt="Graph Image" />
          </div>
          <div className="content">
            <Heading content="Fund raising allocation" />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit ." />
            <Image src={GraphFeatureImg} alt="Graph Feature Image" />
          </div>
          <div className="gradientDiv"> </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
