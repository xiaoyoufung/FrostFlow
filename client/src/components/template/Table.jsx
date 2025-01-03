import React from "react";

const Table = () => {
  return (
    <div className="mx-4">
      <div className="rounded-lg ring-2 ring-black ring-opacity-5 shadow-md">
      <table className="border-collapse table-auto w-full divide-y divide-gray-200 border-spacing-2 px-2">
        <thead className="bg-gray-50 border-b border-gray-300">
          <tr>
            <th className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold">Month</th>
            <th className="py-3.5 pl-3 pr-6 text-left text-sm font-semibold">Savings</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="py-3.5 pl-6 pr-3">January</td>
            <td className="py-3.5 pl-3 pr-6">$100</td>
          </tr>
          <tr>
            <td className="py-3.5 pl-6 pr-3">February</td>
            <td className="py-3.5 pl-3 pr-6">$80</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="py-3.5 pl-6 pr-3" >Sum</td>
            <td className="py-3.5 pl-3 pr-6">$180</td>
          </tr>
        </tfoot>
      </table>
      </div>
    </div>
  );
};

export default Table;
