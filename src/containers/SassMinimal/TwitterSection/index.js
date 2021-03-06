import React from 'react';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/twitter';

import Link from 'next/link';
import Image from 'src/common/src/components/Image';
import Box from 'src/common/src/components/Box';
import Heading from 'src/common/src/components/Heading';
import Text from 'src/common/src/components/Text';
import Container from 'src/common/src/components/UI/Container';

import { TwitterWrapper } from './twitter.style';

import { TWITTER_DATA } from 'src/common/src/data/SassMinimal';

const TwitterSection = () => {
  return (
    <TwitterWrapper>
      <Container>
        <Box className="blockTitle">
          <Heading as="h2" content="What our clients say about us" />
          <Text as="p" content="Some comments highlights from twitter" />
        </Box>
        <Box className="row">
          {TWITTER_DATA.map((tweet, index) => (
            <Box className="column" key={`twitter-${index}`}>
              <Box className="twitterBox">
                <Box className="twitterBoxInner">
                  <Box className="twitterTop">
                    <Image src={tweet.image} alt="Twitter Avatar" />
                    <Heading as="h3" content={tweet.name} />
                    <Text as="span" content={tweet.designation} />
                    <Icon icon={twitter} size={27} />
                  </Box>
                  <Box className="twitterContent">
                    <Text as="p" content={tweet.content} />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="text-center">
          <Link href="#">
            <a className="viewTwitter">More on Twitter</a>
          </Link>
        </Box>
      </Container>
    </TwitterWrapper>
  );
};

export default TwitterSection;
