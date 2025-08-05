import React, { useEffect, useState } from 'react'
import Pagination from './components/Pagination'
import axios from 'axios'

function App() {
  const [list, setList] = useState([])

  const fetchList = async () => {
    return await axios.get('https://randomuser.me/api?format=pretty', {
      params: {
        page: 1,
        results: 20,
      },
    })
  }

  useEffect(() => {
    const response = fetchList()
    // const count = response.headers['x-total-count']

    response
      .then((line) => {
        return line.data
      })
      .then((array) =>
        setList(
          array.results.map((line) => {
            return {
              name: line.name['first'] + ' ' + line.name['last'],
              email: line.email,
              age: line.dob['age'],
            }
          })
        )
      )
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return <Pagination data={list} />
}

export default App
