import React from 'react';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'src/common/src/components/UI/ContainerTwo';
import Text from 'src/common/src/components/Text';
import Heading from 'src/common/src/components/Heading';
import Image from 'src/common/src/components/Image';
import List from 'src/common/src/components/List';
import Link from 'src/common/src/components/Link';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
  ListGroup,
} from './workHard.style';
import data from 'src/common/src/data/AgencyModern';
import illustration from 'src/common/src/assets/image/agencyModern/work-hard-illustration.png';
import Tick from 'src/common/src/assets/image/agencyModern/tick-circle.png';

const WorkHard = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content>
            <Heading
              as="h2"
              content="Don’t work hard, be smart &amp; work smartly. Take relax sit"
            />
            <Text content="Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever." />
            <ListGroup>
              {data.WorkHardList.map((item) => (
                <List
                  className="list-item"
                  key={item.id}
                  text={item.title}
                  icon={<Image src={Tick} alt="tick icon" />}
                />
              ))}
            </ListGroup>
            <Link className="explore" href="#">
              Explore more <Icon icon={chevronRight} />
            </Link>
          </Content>
          <Illustration>
            <Image src={illustration} alt="Illustration" />
          </Illustration>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default WorkHard;
