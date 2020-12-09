import React from 'react';
import Link from 'next/link';
import Box from 'src/common/src/components/Box';
import Heading from 'src/common/src/components/Heading';
import Text from 'src/common/src/components/Text';
import Button from 'src/common/src/components/Button';
import Image from 'src/common/src/components/Image';
import Container from 'src/common/src/components/UI/Container';
import Fade from 'react-reveal/Fade';

import { BannerWrapper } from './bannerSection.style';

import { BANNER_DATA } from 'src/common/src/data/SassMinimal';

const BannerSection = () => {
  return (
    <BannerWrapper id="banner_section">
      {BANNER_DATA.map((banner, index) => (
        <Container key={`banner-${index}`}>
          <Heading content={banner.title} as="h3" />
          <Text content={banner.text} />
          <Link href={banner.btnLink}>
            <a>
              <Button title={banner.btnLabel} />
            </a>
          </Link>
          <Text as="span" content={banner.offerText} />
          <Fade bottom>
            <Box className="imageWrapper">
              <Image src={banner.image} alt="Banner Image" />
            </Box>
          </Fade>
        </Container>
      ))}
      ;
    </BannerWrapper>
  );
};

export default BannerSection;
