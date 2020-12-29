import React from 'react';
import Link from 'next/link';
import Text from 'src/common/src/components/Text';
import CopyrightWrapper from './copyrightSection.style';
import { RichText } from 'prismic-reactjs';
//import data from 'src/common/src/data/Agency/';

function socialIconResolver(type) {
  if (type === 'Facebook') {
    return 'flaticon-facebook-logo';
  } else if (type === 'Twitter') {
    return 'flaticon-twitter-logo-silhouette';
  } else if (type === 'Instagram') {
    return 'flaticon-instagram';
  } else if (type === 'Tumblr') {
    return 'flaticon-tumblr-logo';
  } else if (type === 'Dribble') {
    return 'flaticon-dribble-logo';
  }

  return '';
}

const CopyrightSection = ({ socialIcons }) => {
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {!!socialIcons &&
          socialIcons.map(({ node }, index) => (
            <li key={`profile_key_${index}`}>
              <a href={RichText.asText(node.url)} target={'_blank'}>
                <i className={socialIconResolver(node.type)} />
              </a>
            </li>
          ))}
      </ul>
      <Text content={process.env.copyrightText} />
    </CopyrightWrapper>
  );
};

export default CopyrightSection;
