//styled-rn
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #793398;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${getStatusBarHeight()}px;
  justify-content: space-between;
  position: relative;
`;

export const Content = styled(Animated.View)`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const CardContainer = styled(Animated.ScrollView).attrs({
  horizontal: true,
  pagingEnabled: true,
  showHorizontalContainerIndicator: false,
})`
  background: #793398;
  flex: 1;
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
`;
