import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Home from './src/views/home'
import Task from './src/views/task'

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task
  })
)

export default function App() {
  return <Routes />
}

