import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from 'src/common/src/components/UI/ContainerTwo';
import Heading from 'src/common/src/components/Heading';
import Image from 'src/common/src/components/Image';
import Link from 'src/common/src/components/Link';
import Text from 'src/common/src/components/Text';
import List from 'src/common/src/components/List';

import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  FooterWidget,
  Nav,
} from './footer.style';
import LogoImage from 'src/common/src/assets/image/agencyModern/logo.png';

import data from 'src/common/src/data/AgencyModern';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <CopyrightInfo>
            <Fade up delay={100}>
              <Image src={LogoImage} alt="Logo" />
              <p>
                <Link href="#">Terms of use</Link> |{' '}
                <Link href="#">Privacy</Link>
              </p>
              <Text
                className="copyright"
                content="Copyright by 2019 Redq, Inc"
              />
            </Fade>
          </CopyrightInfo>

          <FooterWidget>
            <Fade up delay={200}>
              <Heading as="h4" content="About Us" />
              <Nav>
                {data.aboutUs.map((item) => (
                  <Link key={item.id} href="#">
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={300}>
              <Heading as="h4" content="Our Information" />
              <Nav>
                {data.ourInformation.map((item) => (
                  <Link key={item.id} href="#">
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={400}>
              <Heading as="h4" content="My Account" />
              <Nav>
                {data.myAccount.map((item) => (
                  <Link key={item.id} href="#">
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={500}>
              <Heading as="h4" content="Connect" />
              <Nav>
                {data.social.map((item) => (
                  <Link key={item.id} href="#">
                    <Image src={item.icon} alt="Facebook" />
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
