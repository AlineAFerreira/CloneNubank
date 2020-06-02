import {StyleSheet, Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.Image`
  width: 100px;
  height: 100px;
  background: #fff;
  padding: 6px;
  margin-bottom: 30px;
  align-self: center;
`;

export const Nav = styled.View`
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
  width: 100%;
`;

export const NavItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavItemText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 20px;
  flex: 1;
`;

export const BtnSignOut = styled.TouchableOpacity`
  width: 100%;
  padding: 13px;
  margin: 20px 0;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
`;

export const BtnText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  text-align: center;
  font-size: 13px;
`;
