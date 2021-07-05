import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../services/api';

// import CharacterItem from './CharacterItem';

import {
    Header,
    Form,
    Title,
    Characters,
    Error,
} from '../styles/characterList';
import logoImg from '../assets/logo.svg';

interface Character {
    id: number;
    results: {
        name: string;
        image: string;
        gender: string;
    };
}

const CharacterList: React.FC = () => {
    const [newChar, setNewChar] = useState('');
    const [inputError, setInputError] = useState('');

    const [characters, setCharacters] = useState<Character[]>([]);

    const searchByName = `/?name=${newChar}`;

    function handleAddCharacter(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        if (!newChar) {
            setInputError('Digite um nome de personagem válido');

            return;
        }

        try {
            api.get(searchByName).then(response => {
                setCharacters([...characters, response.data]);
            });

            setNewChar('');

            setInputError('');
        } catch (error) {
            setInputError('Erro na busca pelo personagem');
        }
    }

    return (
        <>
            <Header>
                <img src={logoImg} alt="Rick and Morty" />
                <Link to="/">
                    <h3>Meus Favoritos</h3>
                    <FiChevronRight size={30} />
                </Link>
            </Header>

            <Title>Explore os personagens da série</Title>

            <Form hasError={!!inputError} onSubmit={handleAddCharacter}>
                <input
                    value={newChar}
                    onChange={e => setNewChar(e.target.value)}
                    placeholder="Digite o nome do personagem"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Characters>
                {characters.map(chars => (
                    <div key={chars.id}>
                        <img
                            src={chars.results.image}
                            alt={chars.results.name}
                        />
                        <span>
                            <h3>{chars.results.name}</h3>
                            <p>{chars.results.gender}</p>
                        </span>
                        <span>Adcionar a favorito</span>
                    </div>
                ))}
            </Characters>

            {/* <Characters>
                {characters.map(chars => {
                    return (
                        <CharacterItem key={chars.id}>
                            <div>
                                <img
                                    src={chars.results.image}
                                    alt={chars.results.name}
                                />
                                <span>
                                    <h3>{chars.results.name}</h3>
                                    <p>{chars.results.gender}</p>
                                </span>
                                <span>Adcionar a favorito</span>
                            </div>
                        </CharacterItem>
                    );
                })}
            </Characters> */}
        </>
    );
};

export default CharacterList;
