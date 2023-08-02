import { AppRouter } from './AppRouter';
import { PokemonProvider } from './context/PokemonProvider'; //Provider de API

function App() {
	return (
		<PokemonProvider>
			<AppRouter />
		</PokemonProvider>
	);
}

export default App;
