import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
	CompositeNavigationProp,
	RouteProp,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import DeliveryCard from '../components/DeliveryCard';
import { RootStackParamList } from '../navigator/RootNavigator';
import { TabStackParamList } from '../navigator/TabNavigator';

type OrderScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<TabStackParamList, 'Orders'>,
	NativeStackNavigationProp<RootStackParamList>
>;

type OrderScreenRouteProp = RouteProp<RootStackParamList, 'Order'>;

const OrderScreen = () => {
	const tw = useTailwind();
	const navigation = useNavigation<OrderScreenNavigationProp>();
	const {
		params: { order },
	} = useRoute<OrderScreenRouteProp>();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: order.trackingItems.customer.name,
			headerTintColor: '#EB6A7C',
			headerTitleStyle: { color: 'black' },
			headerBackTitle: 'Deliveries',
		});
	}, [order]);

	return (
		<View style={tw('-mt-2')}>
			<DeliveryCard order={order} fullWidth />
		</View>
	);
};

export default OrderScreen;
