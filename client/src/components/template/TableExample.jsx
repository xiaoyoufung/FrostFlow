import React from 'react'

const Table = () => {
  return (
    <div>
    <div className="mt-4 -mb-3">
      <div className="relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
        <div
          className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
          style={{ backgroundPosition: "10px 10px" }}
        />
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden my-8">
            <table className="border-collapse table-auto w-full text-sm" role="table">
              <thead>
                <tr>
                  <th scope="col" className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Song
                  </th>
                  <th scope="col" className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Artist
                  </th>
                  <th scope="col" className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
                <tr>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    Malcolm Lockyer
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    1961
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    Witchy Woman
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    The Eagles
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    1972
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    Shining Star
                  </td>
                  <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400">
                    Earth, Wind, and Fire
                  </td>
                  <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    1975
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5" />
      </div>
    </div>
  </div>
  )
}

export default Table