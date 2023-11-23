import React, { useEffect, useState } from 'react'
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
    <div>
      <b>Users</b>
      {users.map(({ id, name }) => <div key={id} data-testid='user-item'>{name}</div>)}
    </div>

  )
}
