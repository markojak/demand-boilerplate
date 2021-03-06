import React, { useContext } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import NavbarWrapper from 'src/common/src/components/Navbar';
import Drawer from 'src/common/src/components/Drawer';
import Logo from 'src/common/src/components/UIElements/Logo';
import Box from 'src/common/src/components/Box';
import HamburgMenu from 'src/common/src/components/HamburgMenu';
import Container from 'src/common/src/components/UI/Container';
import { DrawerContext } from 'src/common/src/contexts/DrawerContext';

//import { MENU_ITEMS } from 'src/common/src/data/Saas';
import ScrollSpyMenu from 'src/common/src/components/ScrollSpyMenu';

import LogoImage from 'src/common/src/assets/image/saas/logo.png';

const Navbar = ({ navbarStyle, logoStyle, row, menuWrapper, navigation }) => {
  const { state, dispatch } = useContext(DrawerContext);
  const menuItems = get(navigation, '[0]node.body[0].fields', null);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Logo logoSrc={LogoImage} title="Secta" logoStyle={logoStyle} />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={menuItems}
              drawerClose={false}
              offset={-70}
            />
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#eb4d4b" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={menuItems}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'hosting_navbar',
    minHeight: '70px',
    display: 'block'
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: [
      'space-between',
      'space-between',
      'space-between',
      'flex-start'
    ],
    width: '100%'
  },
  logoStyle: {
    maxWidth: '130px',
    mr: [0, 0, 0, '166px']
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: `${1}`
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center'
  }
};

export default Navbar;
