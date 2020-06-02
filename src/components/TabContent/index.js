import React from 'react';
import {Animated, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, BoxIcon, TextContent} from './styles';

const TabContent = ({tabTitle, openTab, statusTab}) => {
  const screenHeight = Dimensions.get('window').height;
  let positionY = new Animated.Value(screenHeight);

  if (openTab) {
    positionY.setValue(screenHeight);
    runAnimation(0);
  }

  const runAnimation = animateTo => {
    Animated.timing(positionY, {
      toValue: animateTo,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleClosePress = () => {
    positionY.setValue(0);
    runAnimation(screenHeight);
    setTimeout(() => {
      statusTab(false);
    }, 500);
  };

  return (
    <Container translateY={positionY}>
      <BoxIcon onPress={handleClosePress}>
        <Icon name="close" size={28} color="#000" />
      </BoxIcon>
      <TextContent>{tabTitle}</TextContent>
    </Container>
  );
};

export default TabContent;
