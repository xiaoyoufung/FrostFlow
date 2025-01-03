import PropTypes from "prop-types";

const Table = ({tHead, data}) => {

  return (
    <div className="mx-4">
      <div className="rounded-lg ring-2 ring-black ring-opacity-5 shadow-md">
        <table className="border-collapse table-auto w-full divide-y divide-gray-200 border-spacing-2 px-2">
          <thead className="bg-gray-50 border-b border-gray-300">
            <tr>
              {tHead.map((head, index) => (
                <th
                  key={index}
                  className={`py-3.5 ${head.className} text-left text-sm font-semibold`}
                >
                  {head.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((product, index) => (
              <tr key={index}>
                <td className="py-3.5 pl-6 pr-3">{product.date}</td>
                <td className="py-3.5 px-3">{product.product_name}</td>
                <td className="py-3.5 px-3">{product.customer_name}</td>
                <td className="py-3.5 px-3">{product.lot_no}</td>
                <td className="py-3.5 px-3">{product.quantity}</td>
                <td className="py-3.5 pl-3 pr-6">{product.expire_date}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-3.5 pl-6 pr-3">Sum</td>
              <td className="py-3.5 pl-3 pr-6">$180</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

Table.propTypes = {
  tHead: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      className: PropTypes.string
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      product_name: PropTypes.string.isRequired,
      customer_name: PropTypes.string.isRequired,
      lot_no: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      expire_date: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default Table;
