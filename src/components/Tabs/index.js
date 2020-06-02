import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabItem, ItemName} from './styles';

export default function Tabs({translateY, positionX, tabContentText}) {
  const updateState = data => {
    tabContentText(data);
  };

  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 350], // Entre a posição 0 e 350 faz animação de 0 a 20px no eixo Y 
              outputRange: [0, 20],
            }),
          },
          {
            translateX: positionX,
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 100], // Entre a posição 0 e 100 faz animação da opacidade de 1 a 0.3(quase transparente)
          outputRange: [1, 0.3],
        }),
      }}>
      <TabsContainer>
        <TabItem
          onPress={() => {
            updateState('Indique um amigo');
          }}>
          <Icon name="person-add" size={26} color="#fff" />
          <ItemName>Indicar Amigos</ItemName>
        </TabItem>
        <TabItem
          onPress={() => {
            updateState('Recarga de celular');
          }}>
          <Icon name="phone-iphone" size={26} color="#fff" />
          <ItemName>Recarga de celular</ItemName>
        </TabItem>
        <TabItem
          onPress={() => {
            updateState('Cobrar');
          }}>
          <Icon name="chat-bubble-outline" size={26} color="#fff" />
          <ItemName>Cobrar</ItemName>
        </TabItem>
        <TabItem
          onPress={() => {
            updateState('Empréstimos');
          }}>
          <Icon name="people-outline" size={26} color="#fff" />
          <ItemName>Empréstimos</ItemName>
        </TabItem>
        <TabItem
          onPress={() => {
            updateState('Depositar');
          }}>
          <Icon name="arrow-downward" size={26} color="#fff" />
          <ItemName>Depositar</ItemName>
        </TabItem>
        <TabItem
          onPress={() => {
            updateState('Transferir');
          }}>
          <Icon name="arrow-upward" size={26} color="#fff" />
          <ItemName>Transferir</ItemName>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
