import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { STEPZEN_LOCAL_URL } from '@env';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwind-rn/dist';
import RootNavigator from './navigator/RootNavigator';
import utilities from './tailwind.json';

declare module '@env' {
	export const STEPZEN_LOCAL_URL: string;
}

const client = new ApolloClient({
	uri: STEPZEN_LOCAL_URL,
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
