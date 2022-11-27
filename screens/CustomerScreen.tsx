import { useQuery } from '@apollo/client';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
	CompositeNavigationProp,
	useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, Input } from '@rneui/themed';
import React, { useLayoutEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import CustomerCard from '../components/CustomerCard';
import { GET_CUSTOMERS } from '../graphql/queries';
import { RootStack } from '../navigator/RootNavigator';
import { TabStackParamList } from '../navigator/TabNavigator';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<TabStackParamList, 'Customers'>,
	NativeStackNavigationProp<RootStack>
>;

const CustomerScreen = () => {
	const tw = useTailwind();
	const navigation = useNavigation<CustomerScreenNavigationProp>();
	const [input, setInput] = useState<string>('');
	const { loading, error, data } = useQuery(GET_CUSTOMERS);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	});

	console.log(data, error, loading);

	return (
		<ScrollView style={{ backgroundColor: '#59C1CC' }}>
			<Image
				source={{ uri: 'https://links.papareact.com/3jc' }}
				containerStyle={tw('w-full h-64')}
				PlaceholderContent={<ActivityIndicator />}
			/>

			<Input
				placeholder="Search by Customer..."
				value={input}
				onChangeText={setInput}
				containerStyle={tw('bg-white pt-5 pb-0 px-10 rounded-lg mt-4')}
			/>

			{data?.getCustomers
				?.filter((customer: CustomerList) =>
					customer.value.name.includes(input)
				)
				.map(({ name: ID, value: { email, name } }: CustomerResponse) => (
					<CustomerCard key={ID} email={email} name={name} userId={ID} />
				))}
		</ScrollView>
	);
};

export default CustomerScreen;
