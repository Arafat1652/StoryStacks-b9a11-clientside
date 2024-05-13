import { Link } from "react-router-dom";


const TableView = ({books}) => {
    return (
        <div className="max-w-7xl mx-auto">
             <div className="mt-10 mb-24">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-[#d7edd8] border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 text-left"
                      >
                        SL
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 text-left"
                      >
                        Book Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 text-left"
                      >
                       Author
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 text-left"
                      >
                       Category Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 text-left"
                      >
                       Rating
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 text-left"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* eslint-disable-next-line react/prop-types */}
                    {books.map((item, index) => (
                      <tr key={item._id} className=" border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                          {index + 1}
                        </td>
                        <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                        {item.book_name}
                        </td>
                        <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                        {item.author_name}
                        </td>
                        <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                        {item.category}
                        </td>
                        <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                        {item.rating}
                        </td>
                        <td className="text-sm  font-light py-2 whitespace-nowrap">
                          <Link to={`/update/${item._id}`}>
                            <button className="btn bg-[#13e5c0] text-white">
                              Update
                            </button>{" "}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default TableView;