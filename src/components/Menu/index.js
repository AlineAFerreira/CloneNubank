import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from './../../assets/images/chart.png';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavItemText,
  BtnSignOut,
  BtnText,
} from './styles';

export default function Menu({translateY}) {
  return (
    <Container>
      <Code source={QRCode} />
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={25} color="#fff" />
          <NavItemText>Me ajuda</NavItemText>
          <Icon name="chevron-right" size={25} color="#fff" />
        </NavItem>

        <NavItem>
          <Icon name="account-circle" size={25} color="#fff" />
          <NavItemText>Perfil</NavItemText>
          <Icon name="chevron-right" size={25} color="#fff" />
        </NavItem>

        <NavItem>
          <Icon name="monetization-on" size={25} color="#fff" />
          <NavItemText>Configurar conta</NavItemText>
          <Icon name="chevron-right" size={25} color="#fff" />
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={25} color="#fff" />
          <NavItemText>Configurar cartão</NavItemText>
          <Icon name="chevron-right" size={25} color="#fff" />
        </NavItem>

        <NavItem>
          <Icon name="store" size={25} color="#fff" />
          <NavItemText>Pedir conta PJ</NavItemText>
          <Icon name="chevron-right" size={25} color="#fff" />
        </NavItem>

        <NavItem>
          <Icon name="settings" size={25} color="#fff" />
          <NavItemText>Configurações do app</NavItemText>
          <Icon name="chevron-right" size={25} color="#fff" />
        </NavItem>
      </Nav>

      <BtnSignOut>
        <BtnText>Sair do APP</BtnText>
      </BtnSignOut>
    </Container>
  );
}
