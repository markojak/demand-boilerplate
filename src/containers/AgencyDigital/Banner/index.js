import React from 'react';
import Text from 'src/common/src/components/Text';
import Input from 'src/common/src/components/Input';
import Image from 'src/common/src/components/Image';
import Button from 'src/common/src/components/Button';
import Heading from 'src/common/src/components/Heading';
import Container from 'src/common/src/components/UI/ContainerTwo';
import Section, {
  ContentWrapper,
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from './banner.style';

import paypal from 'src/common/src/assets/image/agencyDigital/paypal.png';
import google from 'src/common/src/assets/image/agencyDigital/google.png';
import dropbox from 'src/common/src/assets/image/agencyDigital/dropbox.png';

const Banner = () => {
  return (
    <Section id="home">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading
              as="h1"
              content="A Creative way to grow your Exciting Business ideas"
            />

            <Text
              className="banner-caption"
              content="Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
            />

            <Subscribe>
              <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
              />
              <Button title="Subscribe" type="submit" />
            </Subscribe>

            <SponsoredBy>
              <Text className="sponsoredBy" content="Clients:" />
              <ImageGroup>
                <Image src={paypal} alt="Paypal" />
                <Image src={google} alt="Google" />
                <Image src={dropbox} alt="Dropbox" />
              </ImageGroup>
            </SponsoredBy>
          </BannerContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
