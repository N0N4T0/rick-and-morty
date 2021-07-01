import React, { useState, FormEvent } from 'react';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import { Img, Form, Title, Error, Characters, CharacterCard } from './styles';

interface Character {
    results: {
        id: number;
        name: string;
        image: string;
        gender: string;
    };
}

const Dashboard: React.FC = () => {
    const [newChar, setNewChar] = useState('');
    const [inputError, setInputError] = useState('');

    const [characters, setCharacters] = useState<Character[]>(() => {
        return [];
    });

    async function handleAddCharacter(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();

        if (!newChar) {
            setInputError('Digite um nome de personagem válido');

            return;
        }

        try {
            const response = await api.get<Character>(
                `character/?name=${newChar}`,
            );

            const character = response.data;

            console.log(character);

            setCharacters([...characters, character]);

            setNewChar('');

            setInputError('');
        } catch (error) {
            setInputError('Erro na busca pelo personagem');
        }
    }

    return (
        <>
            <Img src={logoImg} alt="Rick and Morty" />
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
                {characters.map(character => (
                    <CharacterCard key={character.results.id}>
                        <img
                            src={character.results.image}
                            alt={character.results.name}
                        />
                        <span>
                            <h3>{character.results.name}</h3>
                            <p>{character.results.gender}</p>
                        </span>
                        <a href="www.g">Adcionar favorito</a>
                    </CharacterCard>
                ))}
            </Characters>
        </>
    );
};

export default Dashboard;
