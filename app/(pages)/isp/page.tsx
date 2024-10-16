'use client';
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

export default function ExcelTable() {
const [tableData, setTableData] = useState<string[][]>([]);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
const fetchData = async () => {
    try {
    // Fetch the .xlsx file
    const res = await fetch('/features/isp%20list.xlsx'); // Use URL-encoded space (%20) for the filename
    if (!res.ok) {
        throw new Error('Failed to fetch the file');
    }
    const data = await res.arrayBuffer();

    // Parse the file using XLSX
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0]; // Get the first sheet
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Convert to JSON format

    setTableData(jsonData);
    } catch (err) {
    console.error('Error reading XLSX file:', err);
    setError(err.message);
    }
};

fetchData();
}, []);

if (error) {
return <div>Error: {error}</div>;
}

return (
<div>
    <h1>Data Table</h1>
    {tableData.length > 0 ? (
    <table border="1">
        <thead>
        <tr>
            <th>ISP Logo</th>
            <th>ISP Name</th>
            <th>Service Available</th>
            <th>Website Address</th>
            <th>Phone Number</th>
        </tr>
        </thead>
        <tbody>
        {tableData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
            <td>
                <img
                src={row[0]}
                alt={row[1]}
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '';
                }}
                style={{ width: '50px', height: '50px' }}
                />
            </td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
            <td>
                <a href={row[3]} target="_blank" rel="noopener noreferrer">
                {row[3]}
                </a>
            </td>
            <td>{row[4]}</td>
            </tr>
        ))}
        </tbody>
    </table>
    ) : (
    <div>Loading...</div>
    )}
</div>
);
}
