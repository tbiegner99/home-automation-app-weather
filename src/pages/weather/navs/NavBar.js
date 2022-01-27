import React from 'react';
import { HeaderNavBar } from '../../../components/menus/HeaderNav';
import Branding from './Branding';
import MenuItem from '../../../components/menus/MenuItem';
import ToggleMenuItem from '../../../components/menus/ToggleMenuItem';
import { HomeIcon, PowerIcon, MuteIcon } from '../../../components/icons/Icons';

import styles from './navBar.css';

const NavBar = (props) => (
  <HeaderNavBar>
    <div />

    <Branding />
    <HomeIcon onClick={props.onHomeClick} />
  </HeaderNavBar>
);

export default NavBar;
