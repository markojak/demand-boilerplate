import React from 'react';
import Link from 'next/link';
import Box from 'src/common/src/components/Box';
import Text from 'src/common/src/components/Text';
import Image from 'src/common/src/components/Image';
import Logo from 'src/common/src/components/UIElements/Logo';
import Heading from 'src/common/src/components/Heading';
import Container from 'src/common/src/components/UI/Container';
import FooterArea, {
  WidgetArea,
  MenuArea,
  Menu,
  MenuItem,
  CopyrightText,
} from './footer.style';

import { footer } from 'src/common/src/data/AppClassic';

const Footer = () => {
  const { logo, menu, widgets } = footer;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container>
        <WidgetArea>
          {widgets.map((item) => (
            <Box className="col" key={`footer-widget--key${item.id}`}>
              <Image src={item.icon} alt={item.title} />
              <Heading as="h3" content={item.title} />
              <Text content={item.description} />
            </Box>
          ))}
        </WidgetArea>
        {/* End of footer widgets area */}
        <MenuArea>
          <Logo
            className="logo"
            href="/appclassic"
            logoSrc={logo}
            title="App Classic"
          />
          <Menu>
            {menu.map((item) => (
              <MenuItem key={`footer-link${item.id}`}>
                <Link href={item.link}>
                  <a>{item.text}</a>
                </Link>
              </MenuItem>
            ))}
          </Menu>
          <CopyrightText>Copyright {year} By RedQ Inc</CopyrightText>
        </MenuArea>
        {/* End of footer menu area */}
      </Container>
    </FooterArea>
  );
};

export default Footer;
