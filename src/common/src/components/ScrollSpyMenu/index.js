import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RichText } from 'prismic-reactjs';
import { get } from 'lodash';

import { DrawerContext } from '../../contexts/DrawerContext';
import Link from 'next/link';

const ScrollSpyMenu = ({ className, menuItems, drawerClose, ...props }) => {
  const { dispatch } = useContext(DrawerContext);
  // empty array for scrollspy items
  const scrollItems = [];

  // convert menu path to scrollspy items
  menuItems
    .filter((item) => !!item.scroll_path)
    .forEach((item) => {
      scrollItems.push(item.scroll_path.slice(1));
    });

  // Add all classs to an array
  const addAllClasses = ['scrollspy__menu'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Close drawer when click on menu item
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return (
    <Scrollspy
      items={scrollItems}
      className={addAllClasses.join(' ')}
      drawerClose={drawerClose}
      {...props}
    >
      {menuItems.map((menu, index) => (
        <li key={`menu-item-${index}`}>
          {!!menu.scroll_path === false ? (
            <>
              {!!menu.external_url ? (
                <a href={RichText.asText(menu.external_url)} target={'_blank'}>
                  {RichText.asText(menu.name)}
                </a>
              ) : (
                <Link
                  href={get(menu, 'page._meta.uid', '').replace('index', '')}
                >
                  <a onClick={toggleDrawer}>{RichText.asText(menu.name)}</a>
                </Link>
              )}
            </>
          ) : (
            <>
              {drawerClose ? (
                <AnchorLink
                  href={RichText.asText(menu.scroll_path)}
                  offset={100}
                  onClick={toggleDrawer}
                >
                  {RichText.asText(menu.name)}
                </AnchorLink>
              ) : (
                <AnchorLink
                  href={RichText.asText(menu.scroll_path)}
                  offset={100}
                >
                  {RichText.asText(menu.name)}
                </AnchorLink>
              )}
            </>
          )}
        </li>
      ))}
    </Scrollspy>
  );
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: PropTypes.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: PropTypes.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: PropTypes.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: PropTypes.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: PropTypes.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: PropTypes.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: PropTypes.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: PropTypes.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: PropTypes.func
};

ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current'
};

export default ScrollSpyMenu;
