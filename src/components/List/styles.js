import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex:1;
`;

export const ContainerItem = styled.View`
    flex-direction: row;
    padding:10px;
    width: 100%;
    border-bottom-width: ${StyleSheet.hairlineWidth};
    border-bottom-color: #eee;
`;

export const TitleItem = styled.Text`
  font-size:15px;
`;
