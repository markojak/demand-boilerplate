import React from 'react';
import Text from 'src/common/src/components/Text';
import CopyrightWrapper from './copyrightSection.style';
import SocialIcons from '../../../common/src/components/SocialIcons';
//import data from 'src/common/src/data/Agency/';

const CopyrightSection = ({ socialIcons }) => {
  return (
    <CopyrightWrapper className="copyright_section">
      <SocialIcons socialIcons={socialIcons} />
      <Text content={process.env.copyrightText} />
    </CopyrightWrapper>
  );
};

export default CopyrightSection;
