import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
    font-size: 24px;
`;

export const ContactsPageButton = styled(RectButton)`
    background-color: #14213d;
    height: 40px;
    width: 100%;
    margin-top: 10px;
    border-radius: 50px;

    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ContactsPageButtonText = styled.Text`
    color: #fff;
    margin-left: 10px;
`;
