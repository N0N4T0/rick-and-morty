import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, Img, CharacterInfo } from './styles';

const Character: React.FC = () => {
    return (
        <>
            <Header>
                <Img src={logoImg} alt="Rick and Morty" />

                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <CharacterInfo>
                <header>
                    <div>
                        <img
                            src="https://avatars.githubusercontent.com/u/39486464?v=4"
                            alt=""
                        />
                        <div>
                            <h3>Nome</h3>
                            <p>Genero</p>
                        </div>
                        <a href="www.g">Adcionar favorito</a>
                    </div>
                </header>
            </CharacterInfo>
        </>
    );
};

export default Character;
