import React, { useState } from 'react'

const Pages = ({ content, itemsPerPage }) => {
  const [page, setPage] = useState(1)

  const handleClick = (n) => {
    setPage(n)
  }

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
      <div>
        {Array.from(
          { length: Math.ceil(content.length / itemsPerPage) },
          (_, i) => (
            <a key={i} onClick={() => handleClick(i + 1)}>
              {i + 1}
            </a>
          )
        )}
      </div>
    </>
  )
}
export default Pages
