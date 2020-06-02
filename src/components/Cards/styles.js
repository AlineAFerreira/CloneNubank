import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Card = styled.View`
  /* flex: 1;*/
  justify-content: space-between;
  background-color: #fff;
  width: ${Dimensions.get('window').width - 24}px;
  border-radius: 6px;
  overflow: hidden;
  margin: 0 12px;
`;

export const CardHeader = styled.View`
  padding: 20px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  flex: 1;
  color: #898989;
  margin-left: 15px;
  font-size: 16px;
  font-weight: 200;
`;

export const CardContent = styled.View`
  padding: 15px;
`;

export const BillMonth = styled.Text`
  font-weight: bold;
  color: #54b9c7;
  text-transform: uppercase;
  font-size: 15px;
`;

export const BillValue = styled.Text`
  color: #54b9c7;
  font-size: 30px;
`;

export const LimitText = styled.Text`
  font-size: 16px;
`;

export const LimitValue = styled.Text`
  font-weight: bold;
  color: #9fc24a;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #898989;
`;

export const AccountBalance = styled.Text`
  width: 70%;
  font-size: 30px;
  padding-bottom: 8px;

  ${props => !props.visible && `
    color: transparent;
    background-color: #f7f7f7;
  `}
`;

export const CardFooter = styled.View`
  padding: 20px 15px;
  background-color: #f7f7f7;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextFooter = styled.Text`
  color: #424242;
  margin: 0 10px;
  flex: 1;
`;

export const TitleRewards = styled.Text`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 17px;
  text-align: center;
  margin: 15px 20px;
`;

export const BtnActive = styled.TouchableOpacity`
  padding: 20px;
  margin: 20px 40px 30px;
  border-radius: 4px;
  border-width: 1px;
  border-color: #793398;
`;

export const BtnText = styled.Text`
  color: #793398;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;