import React from 'react'
import { useState } from 'react'

export default function HelloWorld() {
  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(false)

  const onClick = () => value === 'hello' && setVisible(prev => !prev)

  const onChange = (e) => setValue(e.target.value)

  return (
    <div>
      <input id='search' onChange={onChange} value={value} />
      <button id='toggle' onClick={onClick}>put 'hello'</button>
      {visible && <h1 id='hello'>HelloWorld</h1>}
    </div>
  )
}
