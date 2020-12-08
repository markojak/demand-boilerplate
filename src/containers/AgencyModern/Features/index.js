import React, { Fragment } from 'react';

import Text from 'src/common/src/components/Text';
import Heading from 'src/common/src/components/Heading';
import Image from 'src/common/src/components/Image';
import Container from 'src/common/src/components/UI/ContainerTwo';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'src/common/src/components/Accordion';
import { Icon } from 'react-icons-kit';
import { thinDown } from 'react-icons-kit/entypo/thinDown';
import { thinRight } from 'react-icons-kit/entypo/thinRight';
import SectionWrapper, { ContentWrapper } from './features.style';
import feature from 'src/common/src/assets/image/agencyModern/features/feature.png';
import WowEmoji from 'src/common/src/assets/image/agencyModern/features/emoji-wow.png';
import data from 'src/common/src/data/AgencyModern';

const Features = () => {
  return (
    <SectionWrapper id="feature">
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={feature} alt="Feature Image" />
          </div>
          <div className="content">
            <Heading content="Meet our exciting features that make you wow 😮" />
            <Text content="Build an incredible workplace and grow your business with all-in-one platform with amazing contents." />
            <Accordion preExpanded={[0]}>
              <Fragment>
                {data.accordion.map((item, index) => (
                  <AccordionItem key={index} uuid={index}>
                    <Fragment>
                      <AccordionTitle>
                        <Fragment>
                          <Heading as="h4" content={item.title} />
                          <IconWrapper>
                            <OpenIcon>
                              <Icon icon={thinRight} size={18} />
                            </OpenIcon>
                            <CloseIcon>
                              <Icon icon={thinDown} size={18} />
                            </CloseIcon>
                          </IconWrapper>
                        </Fragment>
                      </AccordionTitle>
                      <AccordionBody>
                        <Text content={item.description} />
                      </AccordionBody>
                    </Fragment>
                  </AccordionItem>
                ))}
              </Fragment>
            </Accordion>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
