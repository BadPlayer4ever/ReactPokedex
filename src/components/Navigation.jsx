import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

export const Navigation = () => {
	const { onInputChange, valueSearch, onResetForm } =
		useContext(PokemonContext);

	const navigate = useNavigate();

	const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};

	return (
		<>
			<header className='container'>
				<Link to='/' className='logo'>
					<img
						src='assets/logo.png'
					/>
				</Link>

				<form onSubmit={onSearchSubmit}>
					<div className='form-group'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='icon-search'>
	
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>

						
						<input
							type='search'
							name='valueSearch'
							id=''
							value={valueSearch}
							onChange={onInputChange}
							placeholder='Buscar por nombre'
						/>
					</div>

					<button className='btn-search'>Buscar</button>
				</form>
			</header>

			<Outlet />
		</>
	);
};
