import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwind-rn/dist';
import RootNavigator from './navigator/RootNavigator';
import utilities from './tailwind.json';

const client = new ApolloClient({
	uri: 'http://192.168.0.7:5001/api/deliveries',
	cache: new InMemoryCache(),
});

export default function App() {
	return (
		// @ts-ignore - TailwindProvier is missing a type definition
		<TailwindProvider utilities={utilities}>
			<ApolloProvider client={client}>
				<NavigationContainer>
					<RootNavigator />
				</NavigationContainer>
			</ApolloProvider>
		</TailwindProvider>
	);
}
