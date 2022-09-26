import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';

import { Statements } from "../Statements";

let PageSize = 10;

export default function Pages() {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return Statements.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <div class="bg-white">
            <table className="min-w-full text-1xl border-4  border-l-slate-500">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="w-24" />
                </colgroup>
                <thead className="dark:bg-slate-500 text-teal-700">
                    <tr className="text-left border-gray-400 bg-gray-100">
                        <th className="p-3 font-semibold  text-2xl text-center">PS #</th>
                        <th className="p-3 text-center font-semibold text-2xl">Statement</th>
                        <th className="p-3 text-center text-2xl font-semibold">Type</th>
                        <th className="p-3 text-center text-2xl font-semibold">Domain</th>
                        <th className="p-3 text-right text-2xl font-semibold">Number</th>
                        <th className="p-3 text-right text-2xl font-semibold">Status</th>
                    </tr>
                </thead>
                <tbody class="border-gray-400 bg-gray-300 font-medium">
                    {
                        Statements.map((detail, key) => (
                            <tr className="border-b border-opacity-20 border-gray-400 bg-slate-100">
                                <td className="p-3">
                                    <p>{detail["num"]}</p>
                                </td>
                                <td className="p-3">
                                    <p>{detail["PS"]}</p>
                                </td>
                                <td className="p-3">
                                    <p>{detail["Type"]}</p>

                                </td>
                                <td className="p-3">
                                    <p>{detail["Domain"]}</p>

                                </td>
                                <td className="p-3 text-right">
                                    <p>{detail["Number"]}</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span>{detail["Status"]}</span>
                                    </span>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={Statements.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    );
}
