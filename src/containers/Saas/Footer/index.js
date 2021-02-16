import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';

import Box from 'src/common/src/components/Box';
import Text from 'src/common/src/components/Text';
import Heading from 'src/common/src/components/Heading';
import Logo from 'src/common/src/components/UIElements/Logo';
import Container from 'src/common/src/components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';

import LogoImage from 'src/common/src/assets/image/saas/logo.png';
import SocialIcons from '../../../common/src/components/SocialIcons';

//import { Footer_Data } from 'src/common/src/data/Saas';

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
  navigation,
  socialIcons
}) => {
  const footerNavigation = get(navigation, '[0].node.body', null);
  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Hosting"
              logoStyle={logoStyle}
            />
            <Text content="hello@redq.io" {...textStyle} />
            <Text content="+479-443-9334" {...textStyle} />

            <SocialIcons socialIcons={socialIcons} />
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {!!footerNavigation &&
              footerNavigation.map((menuSlice, index) => (
                <Box className="col" {...col} key={`footerMenuCol_${index}`}>
                  <Heading
                    content={RichText.asText(
                      get(menuSlice, 'primary.section_title', '')
                    )}
                    {...titleStyle}
                  />
                  <List>
                    {menuSlice.fields.map((field, index2) => (
                      <ListItem key={`list__item-footer-${index2}`}>
                        {!!field.external_url &&
                        !!RichText.asText(field.external_url) ? (
                          <a
                            href={RichText.asText(field.external_url)}
                            target={'_blank'}
                          >
                            {RichText.asText(field.name)}
                          </a>
                        ) : (
                          <Link
                            href={
                              '/' +
                              get(field, 'page._meta.uid', '').replace(
                                'index',
                                ''
                              )
                            }
                          >
                            <a className="ListItem">
                              {RichText.asText(field.name)}
                            </a>
                          </Link>
                        )}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
          </Box>
          {/* End of footer List column */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0]
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px'
  },
  // Default logo size
  logoStyle: {
    width: '100px',
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px'
  }
};

export default Footer;
