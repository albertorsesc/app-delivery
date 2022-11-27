import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ModalScreen from '../screens/ModalScreen';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
	Main: undefined;
	Modal: {
		userId: string;
		name: string;
	};
	Order: {
		order: any;
	};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
	return (
		<RootStack.Navigator>
			<RootStack.Group>
				<RootStack.Screen name="Main" component={TabNavigator} />
			</RootStack.Group>

			<RootStack.Group
				screenOptions={{
					presentation: 'modal',
				}}
			>
				<RootStack.Screen
					options={{ headerShown: false }}
					name="Modal"
					component={ModalScreen}
				/>
			</RootStack.Group>
		</RootStack.Navigator>
	);
};

export default RootNavigator;
