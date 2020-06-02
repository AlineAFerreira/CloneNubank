import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {shade} from 'polished';

export const Container = styled(Animated.View)`
  width: 100%;
  height: 100%;
  background-color: #FFF;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  position: absolute;
  z-index: 6;
  bottom: 0;
  transform: ${(props) => `translateY(${props.translateY._value}px)`};
`;

export const BoxIcon = styled.TouchableOpacity`
  padding: 20px;
  width: 70px;
`;

export const TextContent = styled.Text`
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
`;
