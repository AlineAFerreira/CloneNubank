import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Card,
  CardHeader,
  Title,
  CardContent,
  BillMonth,
  BillValue,
  LimitText,
  LimitValue,
  Strong,
  Label,
  AccountBalance,
  CardFooter,
  TextFooter,
  TitleRewards,
  Description,
  BtnActive,
  BtnText,
} from './styles';

export default function Cards() {
  const [visibility, setVisibility] = useState(true);

  return (
    <>
      <Card>
        <CardHeader>
          <Icon name="credit-card" size={28} color="#777" />
          <Title>Cartão de crédito</Title>
        </CardHeader>
        <CardContent>
          <BillMonth>Fatura atual</BillMonth>
          <BillValue>
            R$ <Strong>1.234</Strong>,56
          </BillValue>
          <LimitText>
            Limite disponível <LimitValue>R$ 1.234,65</LimitValue>
          </LimitText>
        </CardContent>
        <CardFooter>
          <Icon name="build" size={25} color="#777" />
          <TextFooter>
            Compra mais recente em Udemy.com no valor de R$ 19,90 terça
          </TextFooter>
          <Icon name="chevron-right" size={28} color="#777" />
        </CardFooter>
      </Card> 
      <Card>
        <CardHeader>
          <Icon name="account-balance-wallet" size={28} color="#777" />
          <Title>Conta</Title>
          <Icon
            name={visibility ? 'visibility' : 'visibility-off'}
            size={28}
            color="#777"
            onPress={() => {
              setVisibility(!visibility);
            }}
          />
        </CardHeader>
        <CardContent>
          <Label>Saldo disponível</Label>
          <AccountBalance visible={visibility}>R$ 1.000,56</AccountBalance>
        </CardContent>
        <CardFooter>
          <Icon name="monetization-on" size={25} color="#777" />
          <TextFooter>
            Transfêrencia de R$ 100,00 feita para Aline Ferreira 09 mai
          </TextFooter>
          <Icon name="chevron-right" size={28} color="#777" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Icon name="card-giftcard" size={28} color="#777" />
        </CardHeader>
        <CardContent>
          <TitleRewards>Nubank Rewards</TitleRewards>
          <Description>
            Acumule pontos que nunca expiram e troque por passagens aéreas ou serviços que você realmente usa.
          </Description>
        </CardContent>
        <BtnActive>
          <BtnText>Ative o seu Rewards</BtnText>
        </BtnActive>
      </Card>
    </>
  );
}
