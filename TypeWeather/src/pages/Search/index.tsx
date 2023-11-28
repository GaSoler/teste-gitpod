import './styles.css';

import { SelectCity } from '../../components/SelectCity';

import { useNavigate } from 'react-router-dom';

export function Search(){
    const navigate = useNavigate();

    return (
        <div className='home'>
            <img src="logo-large.svg" alt="Logo" />

            <main>
                <h1>Boas vindas ao <strong>TypeWeather</strong></h1>
                <span>Escolha um local para ver a previsão do tempo</span>

                <SelectCity />
            </main>
        </div>
    )
}