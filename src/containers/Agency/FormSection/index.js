import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'src/common/src/components/Box';
import Heading from 'src/common/src/components/Heading';
import Input from 'src/common/src/components/Input';
import Button from 'src/common/src/components/Button';
import Container from 'src/common/src/components/UI/Container';
import FormSectionWrapper, { FormInnerDiv } from './formSection.style';
import Alert from '../../../common/src/components/Alert';

const FormSection = ({ sectionHeader, sectionTitle, btnStyle }) => {
  const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');

  function resetFormFields() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setTitle('');
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

    // Send form data to Airtable.
    const Airtable = require('airtable');
    const base = new Airtable({ apiKey: process.env.airtableApiKey }).base(
      process.env.airtableBaseId
    );

    base('Leads').create(
      [
        {
          fields: {
            email: email,
            firstName: firstName,
            lastName: lastName,
            company: company,
            phone: phone,
            title: title
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
    <FormSectionWrapper>
      <Container>
        <Box {...sectionHeader}>
          <Heading content="Example form title" {...sectionTitle} />
        </Box>
        <Box>
          <form onSubmit={handleFormSubmit} id="lead">
            <FormInnerDiv>
              <Input
                required={true}
                inputType="text"
                isMaterial={false}
                placeholder="First Name*"
                aria-label="First Name"
                value={firstName}
                onChange={setFirstName}
              />
              <Input
                required={true}
                inputType="text"
                isMaterial={false}
                placeholder="Last Name*"
                aria-label="Last Name"
                value={lastName}
                onChange={setLastName}
              />
              <Input
                required={true}
                inputType="email"
                isMaterial={false}
                placeholder="Email Address*"
                aria-label="email"
                value={email}
                onChange={setEmail}
              />
              <Input
                required={true}
                inputType="text"
                isMaterial={false}
                placeholder="Phone*"
                aria-label="Phone"
                value={phone}
                onChange={setPhone}
              />
              <Input
                className="hdn"
                inputType="text"
                placeholder="Phone"
                name="phone"
              />
              <Input
                required={true}
                inputType="text"
                isMaterial={false}
                placeholder="Company*"
                aria-label="Company"
                value={company}
                onChange={setCompany}
              />
              <Input
                inputType="text"
                isMaterial={false}
                placeholder="Title"
                aria-label="Title"
                value={title}
                onChange={setTitle}
              />
              <Button
                isLoading={isLoading}
                disabled={isLoading}
                type="submit"
                title="SEND MESSAGE"
                {...btnStyle}
              />

              {isSuccessAlertVisible && (
                <Alert className="is-success" isMaterial={true}>
                  Thank you!
                </Alert>
              )}
            </FormInnerDiv>
          </form>
        </Box>
      </Container>
    </FormSectionWrapper>
  );
};

// NewsletterSection style props
FormSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object
};

// NewsletterSection default style
FormSection.defaultProps = {
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

export default FormSection;
