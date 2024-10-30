'use client';
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

// Component to toggle between truncated and full text
const TextToggle = ({ text, limit = 50 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle button click
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    // If the text is shorter than the limit, display it fully
    if (text.length <= limit) {
        return <span>{text}</span>;
    }

    return (
        <span>
            {isExpanded ? text : `${text.slice(0, limit)}... `}
            <button onClick={toggleText} className="text-blue-500 hover:underline">
                {isExpanded ? 'Show Less' : 'Show More'}
            </button>
        </span>
    );
};
export default function ExcelTable() {
    const [tableData, setTableData] = useState<string[][]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1); // For pagination
    const rowsPerPage = 50;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/features/isp_list.xlsx');
                if (!res.ok) {
                    throw new Error('Failed to fetch the file');
                }
                const data = await res.arrayBuffer();

                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];

                const jsonData = XLSX.utils.sheet_to_json<string[]>(sheet, { header: 1 });
                setTableData(jsonData as string[][]);
            } catch (err: unknown) {
                console.error('Error reading XLSX file:', err);
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Unknown error');
                }
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }


    const getFaviconUrl = (url) => {
        try {
            const baseUrl = new URL(url);
            return `https://logo.clearbit.com/${baseUrl.hostname}`;
        } catch {
            return '';
        }
    };

    const handleImageError = (e) => {
        e.currentTarget.src = '/images/not-found.jpg';
        e.currentTarget.onerror = null;
    };

    const dataWithoutHeader = tableData.slice(1).filter(row => row.length > 0);

    const totalPages = Math.ceil(dataWithoutHeader.length / rowsPerPage);

    // Pagination logic
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = dataWithoutHeader.slice(indexOfFirstRow, indexOfLastRow);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold my-4">ISP Data Table</h1>
            {tableData.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left border border-gray-200">Logo</th>
                                <th className="px-4 py-2 text-left border border-gray-200">ISP Name</th>
                                <th className="px-4 py-2 text-left border border-gray-200">Service Available</th>
                                <th className="px-4 py-2 text-left border border-gray-200">Website Address</th>
                                <th className="px-4 py-2 text-left border border-gray-200">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border border-gray-200">
                                        <img
                                            src={getFaviconUrl(row[2])}
                                            alt={row[1]}
                                            onError={handleImageError}
                                            className="w-12 h-12 rounded-md"
                                        />
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <TextToggle text={row[0]} limit={20} />
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <TextToggle text={row[1]} limit={20} />
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <a
                                            href={row[2]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            <TextToggle text={row[2]} limit={30} />
                                        </a>
                                    </td>
                                    <td className="px-4 py-2 border min-w-36 border-gray-200">
                                        <TextToggle text={row[3]} limit={15} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination controls */}
                    <div className="mt-4 flex justify-between items-center">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className="bg-gray-200 px-4 py-2 rounded-md disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="text-gray-700">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className="bg-gray-200 px-4 py-2 rounded-md disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-gray-600">Loading...</div>
            )}
        </div>
    );
}
