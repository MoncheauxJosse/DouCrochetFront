import React from 'react';

/* eslint-disable no-unused-vars */
const SimpleList = ({ data: { column, rows } }) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <THeader column={column} />
                            <TBody rows={rows} />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleList;

const THeader = ({ column }) => {
    return (
        <thead className="bg-gray-50">
            <tr>
                {column.map((data, index) => (
                    <Th data={data} key={index} />
                ))}
            </tr>
        </thead>
    );
};

const Th = ({ data }) => {
    return (
        <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
            {data.name}
        </th>
    );
};

const TBody = ({ rows }) => {
    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, index) => (
                <TRow row={row} key={index} />
            ))}
        </tbody>
    );
};

const TRow = ({ row }) => {
    return (
        <tr>
            {Object.keys(row).map((data, index) => (
                <Td data={row[data]} key={index} />
            ))}
        </tr>
    );
};

const Td = ({ data }) => {
    return <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data}</td>;
};

/*

<tbody className="bg-white divide-y divide-gray-200">
    {data.map((person) => (
        <tr key={person.email}>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                        />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {person.name}
                        </div>
                        <div className="text-sm text-gray-500">
                            {person.email}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                    {person.title}
                </div>
                <div className="text-sm text-gray-500">
                    {person.department}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {person.role}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a
                    href="/#"
                    className="text-indigo-600 hover:text-indigo-900"
                >
                    Edit
                </a>
            </td>
        </tr>
    ))}
</tbody>


*/
