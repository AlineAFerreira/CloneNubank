import React, {useState} from 'react';
import {Animated, Dimensions} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Header from './../../components/Header/index';
import Menu from './../../components/Menu';
import Cards from './../../components/Cards';
import Tabs from './../../components/Tabs/index';
import TabContent from './../../components/TabContent/index';
import {Container, Content, CardContainer} from './styles';

export default function Home() {
  let offset = 0;
  let translateY = new Animated.Value(0);
  const screenWidth = Dimensions.get('window').width;
  const [initialAnimate, setInitialAnimate] = useState(screenWidth);
  const [showTabContent, setShowTabContent] = useState(false);
  const [tabTitle, setTabTitle] = useState('');
  const cardPosition = new Animated.Value(initialAnimate);
  const tabPosition = new Animated.Value(initialAnimate);

  Animated.parallel([
    Animated.spring(cardPosition, {
      toValue: 0,
      friction: 4,
      tension: 10,
      useNativeDriver: true,
    }),

    Animated.spring(tabPosition, {
      toValue: 0,
      friction: 4,
      tension: 5,
      delay: 300,
      useNativeDriver: true,
    }),
  ]).start(() => {
    setInitialAnimate(0);
  });

  const controlTabContent = data => {
    setTabTitle(data);
    setShowTabContent(true);
  };

  const animatedEvent = Animated.event(
    [{nativeEvent: {translationY: translateY}}],
    {useNativeDriver: true},
  );

  const onHandlerStateChanged = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 350 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 350 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  };

  return (
    <Container>
      <Header translateY={translateY} />
      <Content style={{transform: [{translateX: cardPosition}]}}>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}>
          <CardContainer
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 350],
                    outputRange: [-50, 0, 350],
                    extrapolate: 'clamp', // Para não ultrapassar o limite definido
                  }),
                },
              ],
            }}>
            <Cards />
          </CardContainer>
        </PanGestureHandler>
      </Content>
      <Tabs
        translateY={translateY}
        positionX={tabPosition}
        tabContentText={controlTabContent}
      />
      <TabContent
        tabTitle={tabTitle}
        openTab={showTabContent}
        statusTab={setShowTabContent}
      />
    </Container>
  );
}
