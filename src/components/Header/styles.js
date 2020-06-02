import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  align-items: center;
  padding: 50px 0 30px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image``;

export const UserName = styled.Text`
  margin-left: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const BoxIcon = styled(Animated.View)`
  align-items: center;
`;