import React from 'react';
import Text from 'src/common/src/components/Text';
import Input from 'src/common/src/components/Input';
import Image from 'src/common/src/components/Image';
import Button from 'src/common/src/components/Button';
import Heading from 'src/common/src/components/Heading';
import Container from 'src/common/src/components/UI/Container';

import {
  FooterWrapper,
  Subscription,
  SubscriptionForm,
  FooterBottom,
  FooterLeft,
  FooterNav,
} from './footer.style';

import { data } from 'src/common/src/data/Donation';
import logoDark from 'src/common/src/assets/image/donation/logo-dark.png';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted.');
  };

  return (
    <FooterWrapper>
      <Container>
        <Subscription>
          <Heading content="Don’t forget to subscribe for any update about COVID-19" />
          <SubscriptionForm onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter Email address"
              className="input-field"
            />
            <Button title="Subscribe" type="submit" />
          </SubscriptionForm>
        </Subscription>
        <FooterBottom>
          <FooterLeft>
            <Image src={logoDark} alt="logo" />
            <Text content="Copyright 2020 by donate org." />
          </FooterLeft>
          <FooterNav>
            {data?.footerNav?.map((nav) => (
              <li key={nav.id}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </FooterNav>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
