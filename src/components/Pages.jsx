import React, { useState, useEffect } from 'react'

const Pages = ({ content, itemsPerPage }) => {
  const [page, setPage] = useState(1)
  const [list, setList] = useState([])

  const handleClick = (n) => {
    setList(content.slice((n - 1) * itemsPerPage, n * itemsPerPage))
    setPage(n)
  }

  return (
    <>
      <div>
        <div className="grid grid-cols-3 gap-5 w-1/6 justify-center align-middle m-auto">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <>
                {list.length == 0
                  ? content.slice(0, itemsPerPage).map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.age}</td>
                          <td>{item.email}</td>
                        </tr>
                      )
                    })
                  : list.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.age}</td>
                          <td>{item.email}</td>
                        </tr>
                      )
                    })}
              </>
            </tbody>
          </table>
        </div>
        <div className="flex mt-6 justify-center align-middle w-auto gap-x-3">
          {Array.from(
            { length: Math.ceil(content.length / itemsPerPage) },
            (_, i) => (
              <a
                className="text-blue-700 cursor-pointer"
                target="_self"
                key={i}
                onClick={() => handleClick(i + 1)}
              >
                {i + 1}
              </a>
            )
          )}
        </div>
      </div>
    </>
  )
}
export default Pages
