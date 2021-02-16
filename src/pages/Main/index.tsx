import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {
    Container,
    Title,
    ContactsPageButton,
    ContactsPageButtonText,
} from './styles';

const Main: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>
            <Container>
                <Title>Main Page</Title>
                <ContactsPageButton
                    onPress={() => navigation.navigate('Contacts')}>
                    <Icon name="users" size={20} color="#fff" />
                    <ContactsPageButtonText>Contacts</ContactsPageButtonText>
                </ContactsPageButton>
            </Container>
        </>
    );
};

export default Main;
