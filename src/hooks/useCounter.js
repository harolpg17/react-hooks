import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

  return {
    counter,
    increment: (value = 1) => setCounter(counter + value),
    decrement: (value = 1) => {
        if (counter === 0) return;
        setCounter(counter - value)
    },
    reset: () => setCounter(initialValue)
  }
}
