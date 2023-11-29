import React from 'react'
import { useParams } from 'react-router-dom';

export default function UserDetailsPage() {
  let { id } = useParams();
  return (
    <>
      <h1 data-testid='user-page'>USER DETAILS PAGE</h1>
      <div data-tesdid='value'>{id}</div>
    </>
  )
}
