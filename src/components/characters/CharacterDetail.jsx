import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Spin, Tag, Button } from 'antd';

const CharacterDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            setCharacter(data);
        };
        fetchCharacter();
    }, [id]);

    if (!character) return <Spin tip="Loading..." />;

    return (
        <div style={{ padding: 20 }}>
            <Button onClick={() => navigate("/characters")} style={{ marginBottom: 20 }}>
                ← Back to Characters
            </Button>

            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} style={{ borderRadius: 8, width: 200 }} />
            <p>
                <strong>Status:</strong>{' '}
                <Tag color={character.status === 'Alive' ? 'green' : 'red'}>{character.status}</Tag>
            </p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Type:</strong> {character.type || 'Unknown'}</p>
            <p><strong>Location:</strong> {character.location.name}</p>
        </div>
    );
};

export default CharacterDetail;