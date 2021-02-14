import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'src/common/src/components/Box';
import Heading from 'src/common/src/components/Heading';
import Input from 'src/common/src/components/Input';
import Button from 'src/common/src/components/Button';
import Container from 'src/common/src/components/UI/Container';
import NewsletterSectionWrapper, {
  NewsletterForm
} from './newsletterSection.style';
import TagManager from 'react-gtm-module';
import Alert from '../../common/src/components/Alert';

const NewsletterSection = ({ sectionHeader, sectionTitle, btnStyle }) => {
  const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  function resetFormFields() {
    setEmail('');
  }

  function formValidation(e) {
    // Check the value of the hidden phone field (anti-spam).
    if (e.target.phone.value !== '') {
      return false;
    }

    // Do additional validation here if needed.

    return true;
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const validationResult = formValidation(e);
    if (!validationResult) {
      return;
    }

    // This will set the submit button disabled and display loading animation.
    setIsLoading(true);

    // Send form data to GTM.
    const tagManagerArgs = {
      gtmId: process.env.gtmCode,
      dataLayer: {
        formId: 'Newsletter',
        fields: {
          email: email
        }
      }
    };

    TagManager.initialize(tagManagerArgs);

    // Send form data to Airtable.
    const Airtable = require('airtable');
    const base = new Airtable({ apiKey: process.env.airtableApiKey }).base(
      process.env.airtableBaseId
    );

    base('Newsletter').create(
      [
        {
          fields: {
            email: email
          }
        }
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        //records.forEach(function (record) {
        //  console.log(record.getId());
        //});
        setIsLoading(false);
        resetFormFields();
        setIsSuccessAlertVisible(true);
      }
    );
  }

  return (
    <NewsletterSectionWrapper id="newsletterSection">
      <Container>
        <Box {...sectionHeader}>
          <Heading content="Subscribe Newsletter" {...sectionTitle} />
        </Box>
        <Box>
          <form onSubmit={handleFormSubmit} id="newsletter">
            <NewsletterForm>
              <Input
                required={true}
                inputType="email"
                isMaterial={false}
                value={email}
                onChange={setEmail}
                placeholder="Email Address"
                aria-label="email"
              />
              <Input
                className="hdn"
                inputType="text"
                placeholder="Phone"
                name="phone"
              />
              <Button
                isLoading={isLoading}
                disabled={isLoading}
                type="submit"
                title="SUBSCRIBE"
                {...btnStyle}
              />
            </NewsletterForm>

            {isSuccessAlertVisible && (
              <Alert
                className="is-success"
                isMaterial={false}
                style={{
                  maxWidth: 488,
                  margin: '30px auto auto auto',
                  textAlign: 'center'
                }}
              >
                Thank you!
              </Alert>
            )}
          </form>
        </Box>
      </Container>
    </NewsletterSectionWrapper>
  );
};

// NewsletterSection style props
NewsletterSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object
};

// NewsletterSection default style
NewsletterSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // button default style
  btnStyle: {
    minWidth: '152px',
    minHeight: '45px',
    fontSize: '14px',
    fontWeight: '500'
  }
};

export default NewsletterSection;
