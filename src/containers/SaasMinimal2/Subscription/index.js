import React from 'react';
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/feather/check';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'src/common/src/components/UI/Container';
import Heading from 'src/common/src/components/Heading';
import Button from 'src/common/src/components/Button';
import Input from 'src/common/src/components/Input';
import {
  Section,
  ContentWrapper,
  SubscriptionWrapper,
  SubscriptionForm,
  Features,
} from './subscription.style';

const Subscription = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('subscribed.');
  };
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <SubscriptionWrapper>
            <Heading content="Get Started today and try 30 days free!" />
            <SubscriptionForm onSubmit={handleSubmit}>
              <Input
                type="email"
                className="input-field"
                placeholder="Type your e-mail"
              />
              <Button
                type="submit"
                title="Start Subscription"
                icon={<Icon size={18} icon={arrowRight} />}
              />
            </SubscriptionForm>
            <Features>
              <li>
                <Icon size={20} icon={check} /> 30 days money back
              </li>
              <li>
                <Icon size={20} icon={check} /> Cancel anytime
              </li>
              <li>
                <Icon size={20} icon={check} /> Support &amp; help
              </li>
            </Features>
          </SubscriptionWrapper>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Subscription;
