import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  /* height: 110px; */
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingRight: 10},
  showHorizontalContainerIndicator: false,
})``;

export const TabItem = styled.TouchableOpacity`
  width: 100px;
  height: 110px;
  padding: 8px 6px 8px 8px;
  background-color: #8a4aa8;
  border-radius: 4px;
  margin-left: 10px;
  justify-content: space-between;
`;

export const ItemName = styled.Text`
  color: #fff;
`;
