import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Home from './src/views/home'
import Task from './src/views/task'
import QrCode from './src/views/qrCode'

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task,
    QrCode
  })
)

export default function App() {
  return <Routes />
}

