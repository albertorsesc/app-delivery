import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import CustomerScreen from './screens/CustomerScreen';

export default function App() {
	return (
		<TailwindProvider utilities={utilities}>
			<NavigationContainer>
				<CustomerScreen />
			</NavigationContainer>
		</TailwindProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
