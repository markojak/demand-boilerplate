import React from 'react';
import Image from 'src/common/src/components/Image';
import Box from 'src/common/src/components/Box';
import Container from 'src/common/src/components/UI/Container';

import { CompanyWrapper } from './company.style';

import { COMPANY_DATA } from 'src/common/src/data/SassMinimal';

const Company = () => {
  return (
    <CompanyWrapper>
      <Container>
        {COMPANY_DATA.map((company, index) => (
          <Box key={`company-box-${index}`}>
            <Image src={company.image} alt="Client Image" />
          </Box>
        ))}
      </Container>
    </CompanyWrapper>
  );
};

export default Company;
