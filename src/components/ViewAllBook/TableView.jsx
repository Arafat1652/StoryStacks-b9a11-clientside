import { Link } from "react-router-dom";


const TableView = ({books}) => {
    return (
        <div className="max-w-7xl mx-auto ">
             <div className="mt-10 mb-24">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-[#6d7ae0] border-b">
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
                      Quantity
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
                        <p
                            className={`px-3 py-1 ${
                              item.category === 'Novel' &&
                              ' bg-blue-100/60'
                            } ${
                              item.category === 'Thriller' &&
                              'bg-emerald-100/60'
                            } ${
                              item.category === 'History' &&
                              'bg-pink-100/60'
                            }  ${
                              item.category === 'Sci-Fi' &&
                              ' bg-cyan-100'
                            }  ${
                              item.category === 'Drama' &&
                              'bg-amber-100/60'
                            } 
                            text-center`
                          }
                          >
                            {item.category}
                          </p>
                        </td>
                        <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                        {item.quantity}
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

                          //   <p
                          //   className={`px-3 py-1 ${
                          //     item.category === 'Novel' &&
                          //     'text-blue-500 bg-blue-100/60'
                          //   } ${
                          //     item.category === '	Thriller' &&
                          //     'text-emerald-500 bg-emerald-100/60'
                          //   } ${
                          //     item.category === 'History' &&
                          //     'text-pink-500 bg-pink-100/60'
                          //   }  ${
                          //     item.category === 'Sci-Fi' &&
                          //     'text-[#c7eded] bg-pink-100/60'
                          //   }  ${
                          //     item.category === 'Drama' &&
                          //     'text-[#ffd6e5] bg-pink-100/60'
                          //   } 
                          //   text-xs  rounded-full`
                          // }
                          // >
                          //   {item.category}
                          // </p>