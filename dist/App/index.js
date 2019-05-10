import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { DefaultContent } from '@hypno7oad/ui';
import { HorizontalLayout, VerticalLayout, Panel, View } from 'nice-react-layout';
import './App.css';

function App(_ref) {
  var Users = _ref.Users,
      HeaderText = _ref.HeaderText,
      SelectedUserText = _ref.SelectedUserText,
      selectUserPlaceholder = _ref.selectUserPlaceholder,
      headerHeight = _ref.headerHeight,
      headerUserBoxWidth = _ref.headerUserBoxWidth,
      useSelectedUserState = _ref.useSelectedUserState,
      ContentComponent = _ref.ContentComponent,
      clientCustomizations = _ref.clientCustomizations,
      debug = _ref.debug;

  var _useSelectedUserState = useSelectedUserState(),
      _useSelectedUserState2 = _slicedToArray(_useSelectedUserState, 2),
      selectedUser = _useSelectedUserState2[0],
      setSelectedUser = _useSelectedUserState2[1];

  if (selectedUser !== null) {
    SelectedUserText = function SelectedUserText() {
      return React.createElement("h5", null, selectedUser.client, ": ", selectedUser.username);
    };
  }

  var handleChange = function handleChange(event) {
    window.location = selectedUser.url;
  };

  return React.createElement(View, null, React.createElement(VerticalLayout, {
    mockup: true
  }, React.createElement(Panel, {
    fixed: true,
    fixedHeight: headerHeight
  }, React.createElement(HorizontalLayout, {
    mockup: true
  }, React.createElement(Panel, {
    centered: true
  }, React.createElement(HeaderText, null)), React.createElement(Panel, {
    fixed: true,
    fixedWidth: headerUserBoxWidth
  }, React.createElement(VerticalLayout, null, React.createElement(Panel, null, React.createElement("h3", null, React.createElement("select", {
    autoFocus: true,
    onChange: handleChange
  }, React.createElement("option", {
    "default": true
  }, selectUserPlaceholder), Users.map(App.mapUserToOption)))), React.createElement(Panel, null, React.createElement(SelectedUserText, null)))))), React.createElement(Panel, {
    centered: true
  }, ContentComponent ? React.createElement(ContentComponent, Object.assign({
    user: selectedUser
  }, clientCustomizations)) : React.createElement(DefaultContent, Object.assign({
    user: selectedUser
  }, clientCustomizations)))));
}

App.mapUserToOption = function (_ref2) {
  var username = _ref2.username,
      displayName = _ref2.displayName;
  return React.createElement("option", {
    value: username,
    key: username
  }, displayName);
};

App.defaultProps = {
  HeaderText: function HeaderText() {
    return React.createElement("h1", null, "Lazy loading of Custom UI Components PoC");
  },
  SelectedUserText: function SelectedUserText() {
    return React.createElement("h5", null, "Please select a user");
  },
  selectUserPlaceholder: 'Select a User:',
  headerHeight: 150,
  headerUserBoxWidth: 200,
  useSelectedUserState: function useSelectedUserState() {
    return useState(null);
  }
};
export default App;