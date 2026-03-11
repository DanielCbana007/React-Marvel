import { useEffect, useState } from 'react';
import { Table, Button, Tag, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const Characters = () => {
    const API_URL = "https://rickandmortyapi.com/api/character";

    const [data, setData] = useState(null);
    const [chars, setChars] = useState([]);
    const [isDisable, setIsDisable] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(API_URL);
            const result = await response.json();
            setData(result);
            console.log(result);
        };
        getData();
    }, []);

    function getAllChar() {
        if (!data) return;

        const { results } = data;

        const newCharacters = results.map(item => ({
            key: item.id,
            name: item.name,
            image: item.image,
            status: item.status,
            species: item.species,
            type: item.type || 'Unknown',
            gender: item.gender,
            location: item.location.name
        }));

        setChars(newCharacters);
        setIsDisable(true);
    }

    // columnas para la tabla AntD
    const navigate = useNavigate();

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (img) => <img src={img} alt="character" style={{ width: 50, borderRadius: 4 }} />
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <strong>{text}</strong>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color = status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray';
                return <Tag color={color}>{status}</Tag>;
            }
        },
        {
            title: 'Species',
            dataIndex: 'species',
            key: 'species'
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender'
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location'
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => navigate(`/characters/${record.key}`)}>View</Button>
                </Space>
            )
        }
    ];

    return (
        <div className="characters">
            <Button
                type="primary"
                onClick={getAllChar}
                disabled={isDisable}
                style={{ marginBottom: 16 }}
            >
                Get Characters
            </Button>

            <Table
                columns={columns}
                dataSource={chars}
                bordered
                pagination={{ pageSize: 5 }}
                rowKey="key"
            />
        </div>
    );
};

export default Characters;