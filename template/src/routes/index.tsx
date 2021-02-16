import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import Contacts from '../pages/Contacts';

const Base = createStackNavigator();

const BaseRoutes: React.FC = () => (
    <Base.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <Base.Screen name="Main" component={Main} />
        <Base.Screen name="Contacts" component={Contacts} />
    </Base.Navigator>
);

export default BaseRoutes;
