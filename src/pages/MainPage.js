import { useCallback, useEffect, useState } from 'react';
import Users from '../Users/Users';

function MainPage() {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100)
  }, [])

  const onClick = useCallback(() => {
    setToggle(prev => !prev);
  }, []);


  const onChange = useCallback((inp) => {
    setValue(inp.target.value);
  }, []);

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <button onClick={onClick} data-testid='toggle-btn'>Click me</button>
      <input type='text' placeholder='input value...' onChange={onChange} />
      <div data-testid='value-elem'>{value}</div>
      {toggle && <div data-testid='toggle-elem'>toggle</div>}
      {data && <div>data</div>}

      <Users />
    </div>
  );
}

export default MainPage;
