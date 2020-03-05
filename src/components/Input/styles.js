import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction:row;
  padding:10px;  
`;

export const Field = styled.TextInput`
    flex:1;
    border: 1px #000 solid;
    border-radius:4px;
    padding:5px;

`;
export const Button = styled.TouchableOpacity`
    border: 1px #000 solid;
    width: 60px;
    height:30px;
    border-radius:4px;
    background: #aa0000;
    margin-left:10px;
    justify-content:center;
    align-items:center;
`;
export const TextButton = styled.Text`
    color:#fff;
    font-weight:bold;
`;
