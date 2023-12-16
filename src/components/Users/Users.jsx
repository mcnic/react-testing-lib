import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useCallback } from 'react';

export default function Users() {
  const [users, setUsers] = useState([])

  const loadUsers = useCallback(async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
    } catch (error) {
      console.error(String(error))
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers])

  return (
    <>
      <h2 data-testid='user-page'>Users</h2>
      <ul>
        {users.map(({ id, name }) =>
          <li key={id}>
            <Link
              to={`/users/${id}`}
              data-testid='user-item'
            >
              {name}
            </Link>
          </li>
        )}
      </ul>
    </>

  )
}
