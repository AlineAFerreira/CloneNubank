import React, {useState} from 'react';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import {Animated, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/images/Nubank_Logo.png';
import {Container, Top, Logo, UserName, BoxIcon} from './styles';

export default function Header({translateY}) {
  const [opacityValue, setOpacityValue] = useState(0);
  const headerOpacity = new Animated.Value(opacityValue);

  Animated.timing(headerOpacity, {
    toValue: 1,
    duration: 600,
    useNativeDriver: true,
  }).start(() => {
    setOpacityValue(1);
  });

  const onHandlerStateChange = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      let opened = false;
      let offsetValue = 0;

      if (translateY._offset < 100) {
        opened = true;
      }
      Animated.timing(translateY, {
        toValue: opened ? 350 : -150,
        duration: opened ? 500 : 700,
        useNativeDriver: true,
      }).start(() => {
        offsetValue = opened ? 350 : 0;
        translateY.setOffset(offsetValue);
      });
    }
  };

  return (
    <Container style={{opacity: headerOpacity}}>
      <TapGestureHandler onHandlerStateChange={onHandlerStateChange}>
        <View>
          <Top>
            <Logo source={logo} />
            <UserName>Aline</UserName>
          </Top>
          <BoxIcon
            style={{
              transform: [
                {
                  rotate: translateY.interpolate({
                    inputRange: [0, 100], // Entre a posição 0 e 100 faz animação de 0 a -180deg
                    outputRange: ['0deg', '-180deg'],
                    extrapolate: 'clamp', // Parar de animar quando chegar na posição 100.
                  }),
                },
              ],
            }}>
            <Icon name="expand-more" size={28} color="#fff" />
          </BoxIcon>
        </View>
      </TapGestureHandler>
    </Container>
  );
}
