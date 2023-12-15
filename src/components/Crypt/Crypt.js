import React from 'react'

const allCurrency = ['usd', 'eur', 'gbp', 'cny', 'jpy']
const urlGetCurrency = 'https://api.frontendeval.com/fake/crypto/'
const ArrowUp = () => (<font color="green">&uarr;</font>)
const ArrowDown = () => (<font color="red"> &darr; </font>)
const WucFormatter = new Intl.NumberFormat('en-US',
  {
    style: 'currency',
    currency: 'wuc',
    currencyDisplay: 'name'
  }
);
const removeCommas = (val) => {
  return val.toString().replace(/[,]/g, "");
}
const addCommas = (num) => {
  const spittedVal = num.toString().split('.', 2);
  let val = spittedVal[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (spittedVal.length > 1) {
    val = val + '.' + spittedVal[1]
  }
  return val;
}
const refreshInterval = 5000

const Crypt = () => {
  const currencyRef = React.useRef(allCurrency[0]);
  const [curency, setCurrency] = React.useState({
    val: 0,
    prev: 0
  })
  const [val, setVal] = React.useState(0);
  const [debouncedVal, setDebouncedVal] = React.useState(0);

  React.useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      const floatVal = Number.parseFloat(removeCommas(val))
      setDebouncedVal(isNaN(floatVal) ? 0 : floatVal);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [val]);

  const getCoeff = React.useCallback(async (cur) => {
    try {
      const response = await fetch(urlGetCurrency + cur);
      const { value } = await response.json();
      return value
    } catch (err) {
      console.error("error", err);
      return 0;
    }
  }, [])

  const onChangeCurrency = React.useCallback(async (event) => {
    const newCurrency = event.target.value
    currencyRef.current = newCurrency

    const newValue = await getCoeff(newCurrency)
    setCurrency({
      val: newValue,
      prev: newValue
    })
  }, [getCoeff])

  const onChangeInput = React.useCallback(async (event) => {
    const val = event.target.value
    const filteredVal = val.match(/([0-9,]*)(\.?)[0-9]*/g)
    const clearedCurrency = removeCommas(filteredVal[0])
    setVal(addCommas(clearedCurrency));
  }, [])

  React.useEffect(() => {
    const interval = setInterval(async () => {
      const newValue = await getCoeff(currencyRef.current)
      setCurrency(prev => {
        return {
          val: newValue,
          prev: prev.val
        }
      })

      return () => clearInterval(interval);
    }, refreshInterval)
  }, [getCoeff])

  return (
    <>
      <div>
        <input
          type="text"
          required
          name="amount"
          aria-label="amount"
          placeholder="e.g. 1000"
          value={val}
          onChange={onChangeInput}
        />
        <select name="currency" value={currencyRef.current} onChange={onChangeCurrency} aria-label="currency">
          {allCurrency.map(
            cur => (
              <option value={cur.toLowerCase()} key={cur.toLowerCase()}>
                {cur.toUpperCase()}
              </option>)
          )}
        </select >
      </div>
      <div>
        {WucFormatter.format(debouncedVal * curency.val)}
        &nbsp;
        {(curency.val > curency.prev)
          ? <ArrowUp />
          : <ArrowDown />
        }
        {Number.parseFloat(debouncedVal * (curency.val - curency.prev)).toFixed(2)}
      </div>
    </>
  );
}

export default Crypt