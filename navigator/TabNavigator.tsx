import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import CustomerScreen from '../screens/CustomerScreen';
import OrderScreen from '../screens/OrderScreen';

export type TabStackParamList = {
	Customers: undefined;
	Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<Tab.Navigator>
			<Tab.Screen name="Customers" component={CustomerScreen} />
			<Tab.Screen name="Orders" component={OrderScreen} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
