import { RichText } from 'prismic-reactjs';
import React from 'react';
import SocialIconSectionStyle from './socialIcons.style';
import Facebook from '../../assets/social-icons/Facebook';
import Twitter from '../../assets/social-icons/Twitter';
import Dekaeder from '../../assets/social-icons/Dekaeder';
import Github from '../../assets/social-icons/Github';
import Linkedin from '../../assets/social-icons/Linkedin';
import Pinterest from '../../assets/social-icons/Pinterest';

function socialIconResolver(type) {
  if (type === 'Facebook') {
    return <Facebook />;
  } else if (type === 'Twitter') {
    return <Twitter />;
  } else if (type === 'Dekaeder') {
    return <Dekaeder />;
  } else if (type === 'Github') {
    return <Github />;
  } else if (type === 'Linkedin') {
    return <Linkedin />;
  } else if (type === 'Pinterest') {
    return <Pinterest />;
  } else if (type === 'Instagram') {
    return <i className="flaticon-instagram" />;
  } else if (type === 'Tumblr') {
    return <i className="flaticon-tumblr-logo" />;
  } else if (type === 'Dribble') {
    return <i className="flaticon-dribble-logo" />;
  }

  return '';
}

export default function SocialIcons({ socialIcons }) {
  return (
    <SocialIconSectionStyle>
      {!!socialIcons &&
        socialIcons.map(({ node }, index) => (
          <li key={`profile_key_${index}`}>
            <a href={RichText.asText(node.url)} target={'_blank'}>
              {socialIconResolver(node.type)}
            </a>
          </li>
        ))}
    </SocialIconSectionStyle>
  );
}
