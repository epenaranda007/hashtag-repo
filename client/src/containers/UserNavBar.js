import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import * as mui from 'material-ui';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import NewBillButton from '../components/NewBillButton'
import FriendsButton from '../components/FriendsButton'
import NavDropMenu from '../components/NavDropMenu'


class UserNavBar extends Component {
  render () {
    const { uploadBill } = this.props

    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text='Splitly' />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton label='New Bill' uploadBill={uploadBill}/>
          <FriendsButton />
          <NavDropMenu/>
        </ToolbarGroup>
      </Toolbar>

    )
  }
};

export default UserNavBar
