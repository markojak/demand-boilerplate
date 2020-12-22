import React, { useContext } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { openModal, closeModal } from '@redq/reuse-modal';
import NavbarWrapper from 'src/common/src/components/Navbar';
import Drawer from 'src/common/src/components/Drawer';
import Button from 'src/common/src/components/Button';
import Logo from 'src/common/src/components/UIElements/Logo';
import HamburgMenu from 'src/common/src/components/HamburgMenu';
import ScrollSpyMenu from 'src/common/src/components/ScrollSpyMenu';
import { Container } from './navbar.style';
import SearchPanel from '../SearchPanel';
import LoginModal from '../LoginModal';
import CopyrightSection from '../CopyrightsSection';

import LogoImage from 'src/common/src/assets/image/agency/logo.png';

import { DrawerContext } from 'src/common/src/contexts/DrawerContext';

//import data from 'src/common/src/data/Agency/';

// Default close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

// Alt close button for modal
const CloseModalButtonAlt = () => (
  <Button
    className="modalCloseBtn alt"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const Navbar = ({ navbarStyle, logoStyle, socialIcons, navigation }) => {
  const { state, dispatch } = useContext(DrawerContext);
  const menuItems = get(navigation, '[0]node.body[0].fields', null);

  // Search modal handler
  const handleSearchModal = () => {
    openModal({
      config: {
        className: 'search-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26
        }
      },
      component: SearchPanel,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false
    });
  };

  // Authentication modal handler
  const handleLoginModal = () => {
    openModal({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26
        }
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false
    });
  };

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href="#"
          logoSrc={LogoImage}
          title="Agency"
          logoStyle={logoStyle}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant="textButton"
            onClick={handleSearchModal}
            icon={<i className="flaticon-magnifying-glass" />}
            aria-label="search"
          />
          <Button
            variant="textButton"
            onClick={handleLoginModal}
            icon={<i className="flaticon-user" />}
            aria-label="login"
          />
          <Drawer
            width="420px"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <ScrollSpyMenu
              menuItems={menuItems}
              drawerClose={true}
              offset={-100}
            />
            <CopyrightSection socialIcons={socialIcons} />
          </Drawer>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object
};

Navbar.defaultProps = {
  // Default navbar style
  navbarStyle: {
    minHeight: '70px'
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto'
  }
};

export default Navbar;
