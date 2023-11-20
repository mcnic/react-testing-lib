// https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/ramp-challenge-instructions/
// https://codesandbox.io/s/cool-wave-6vprff?file=/src/App.js:0-1963

import { useEffect, useState, useCallback } from "react";

export default function App() {
  const [loading, setLoading] = useState();
  const [bufferLetters, setBufferLetters] = useState([]);
  const [numLetters, setNumLetters] = useState(0);
  const url =
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/70726f";

  useEffect(() => {
    fetchAndStartShow();
  }, []);

  const fetchAndStartShow = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const text = await response.text();
      setLoading(false);
      const arrLetters = text.split("");
      setBufferLetters(arrLetters);
    } catch (err) {
      setLoading(false);
      console.error("error", err);
    }
  }, []);

  useEffect(
    (timeout = 500) => {
      if (numLetters >= bufferLetters.length) {
        return;
      }

      setTimeout(() => {
        setNumLetters((prev) => prev + 1);
      }, timeout);
    },
    [numLetters, bufferLetters]
  );

  return (
    <div className="App">
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        <ul>
          {bufferLetters.slice(0, numLetters + 1).map((el, key) => (
            <li key={key}>{el}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/*
    const arr = []

    const allClass = Array.prototype.slice.call(document.querySelectorAll("#flag code"))
      .filter(el => {
        return /23* /.test(el.getAttribute('data-class')) <== '*' and '/' must be without spase!
      })

    allClass.forEach(elClass => {
      const elTag = elClass.querySelector("div.ramp")
      if (/[^93]/.test(elTag.getAttribute('data-tag'))) {
        const elId = elTag.querySelector("span.ramp")
        if (/[21]/.test(elId.getAttribute('data-id'))) {
          const el = elId.querySelector("i.ramp.char")
          const val = el.getAttribute('value')
          arr.push(val)
        }
      }
    });
    console.log(arr.join(''))
*/
