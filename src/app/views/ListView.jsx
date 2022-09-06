import React, { useEffect, useState } from 'react';

import Table from '../components/lib/container/Table';

const dataBackEnd = [
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        isActive: false,
        email: 'jane.cooper@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'John Doe',
        title: 'CEO',
        department: 'Direction',
        role: 'Director',
        isActive: true,
        email: 'john.doe@example.com',
        edit: 'editBtn',
        image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
];

const ListView = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        setPeople(
            dataBackEnd.map((d) => {
                return {
                    name: <Name person={d} />,
                    title: <Title person={d} />,
                    status: <Active isActive={d.isActive} />,
                    role: d.role,
                    edit: <EditBtn />,
                };
            }),
        );
    }, []);

    return (
        <div className="">
            <Table
                data={{
                    column: [
                        { name: 'Name' },
                        { name: 'Title' },
                        { name: 'Status' },
                        { name: 'Role' },
                        { name: '' },
                    ],
                    rows: people,
                }}
            />

            <Example />
        </div>
    );
};

export default ListView;

const EditBtn = () => {
    return (
        <button type="button" className="btn-link-primary">
            Edit
        </button>
    );
};

const Name = ({ person }) => {
    return (
        <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
            </div>
            <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{person.name}</div>
                <div className="text-sm text-gray-500">{person.email}</div>
            </div>
        </div>
    );
};

const Title = ({ person }) => {
    return (
        <>
            <div className="text-sm text-gray-900">{person.title}</div>
            <div className="text-sm text-gray-500">{person.department}</div>
        </>
    );
};

const Active = ({ isActive }) => {
    return (
        <span
            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 
			${isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        >
            {isActive ? 'Active' : 'Inactive'}
        </span>
    );
};

const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
];

function Example() {
    return (
        <div className="mt-3 ml-7 w-fit rounded-xl border border-gray-300 bg-white px-3 shadow">
            <ul className="divide-y divide-gray-200">
                {people.map((person) => (
                    <li key={person.email} className="flex py-4">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                        />
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                                {person.name}
                            </p>
                            <p className="text-sm text-gray-500">{person.email}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
