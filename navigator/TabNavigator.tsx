import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomerScreen from '../screens/CustomerScreen';
import OrderScreen from '../screens/OrderScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Customers" component={CustomerScreen} />
			<Tab.Screen name="Orders" component={OrderScreen} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
