import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Box from 'src/common/src/components/Box';
import Heading from 'src/common/src/components/Heading';
import Text from 'src/common/src/components/Text';
import Container from 'src/common/src/components/UI/Container';
import CounterArea, { Row, Col } from './counter.style';
import { CounterData } from 'src/common/src/data/AppMinimal';

const Counter = () => {
  const { blockTitle, countBox } = CounterData;
  const { title, tagline } = blockTitle;
  return (
    <CounterArea>
      <Container className="Container">
        <Box className="topTitle">
          <Heading as="h2" content={title} />
          <Text as="p" content={tagline} />
        </Box>
        <Row>
          {countBox.map(({ number, text, button }, index) => (
            <Col key={`counter-key-${index}`}>
              <Box className="CounterBox">
                <Heading as="h3" content={`${number}%`} />
                <Text as="p" content={text} />
                <Link href={button.link}>
                  <a className="counterLink">
                    {button.label} <Icon size={18} icon={androidArrowForward} />
                  </a>
                </Link>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </CounterArea>
  );
};

export default Counter;
