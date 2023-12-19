import React from 'react'
import { useSelector } from 'react-redux'

export default function AboutPage() {
  const count = useSelector((state) => state.counter.value)

  return (
    <div className="App">
      <h1 data-testid='about-page'>ABOUT PAGE</h1>
      {count}
    </div>
  )
}
