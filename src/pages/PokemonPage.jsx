import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import { primerMayuscula } from '../helper/helper';

//Pagina Vista detallada

export const PokemonPage = () => {
	const { getPokemonByID } = useContext(PokemonContext);

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

	const { id } = useParams();

	const fetchPokemon = async id => {
		const data = await getPokemonByID(id);
		setPokemon(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchPokemon(id);
	}, []);

	return (
		<main className='container main-pokemon'>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className='header-main-pokemon'>
						<span className='number-pokemon'>N°{pokemon.id}</span>
						<div className='container-img-pokemon'>
							<img
								src={pokemon.sprites.other.dream_world.front_default}
								alt={`Pokemon ${pokemon?.name}`}
							/>
						</div>

						<div className='container-info-pokemon'>
							<h1>{primerMayuscula(pokemon.name)}</h1>
							<div className='card-types info-pokemon-type'>
								{pokemon.types.map(type => (
									<span key={type.type.name} className={`${type.type.name}`}>
										{type.type.name}
									</span>
								))}
							</div>
							
							<div className='info-pokemon'>
								<div className='group-info'>
									<p>Altura</p>
									<span>{pokemon.height*10}cm</span>
								</div>
								<div className='group-info'>
									<p>Peso</p>
									<span>{pokemon.weight/10}KG</span>
								</div>
							</div>
						</div>
					</div>

					<div className='container-stats'>
						<h1>Estadísticas</h1>
						<div className='stats'>
							<div className='stat-group'>
								<span>Puntos de vida</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[0].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Ataque</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[1].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Defensa</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[2].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Ataque especial</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[3].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Defensa especial</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[4].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Velocidad</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[5].base_stat}
								</span>
							</div>
						</div>
					</div>
				</>
			)}
		</main>
	);
};
