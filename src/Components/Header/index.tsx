import React from 'react';
import { View, Text } from 'react-native';

import Logo from '../../Icons/Logo'
import Notification from '../../Icons/Notification'

import { HeaderContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
        <Logo />
        <Notification />
    </HeaderContainer>
  );
}
