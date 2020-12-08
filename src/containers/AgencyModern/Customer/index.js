import React from 'react';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'src/common/src/components/UI/ContainerTwo';
import Text from 'src/common/src/components/Text';
import Heading from 'src/common/src/components/Heading';
import Image from 'src/common/src/components/Image';
import Link from 'src/common/src/components/Link';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
} from './customer.style';
import illustration from 'src/common/src/assets/image/agencyModern/customer.png';

const Customer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Illustration>
            <Image src={illustration} alt="Illustration" />
          </Illustration>
          <Content>
            <Heading
              as="h2"
              content="We have more than thousand of worldwide happy customer"
            />
            <Text content="Coworking offers beautifully crafted workspaces where people can create, connect, and grow their businesses at prime locations in multiple cities." />
            <Link className="explore" href="#">
              Explore more <Icon icon={chevronRight} />
            </Link>
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Customer;
