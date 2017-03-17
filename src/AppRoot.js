import React, { Component } from 'react';
import appStore from './AppStore';
import { AppRouter } from './router';

export default class AppRoot extends Component {
  render() {
    return <AppRouter appStore={appStore} />;
  }
};