import React from 'react'
import { CounterContext } from '../context/Counter'
import { useContext } from 'react'

const Practise = () => {

  const values = useContext(CounterContext)

  console.log("CounterContext", values)
  return (
    <div>
      <h1 onClick={() => values.setcount(values.count + 1)}>Click Here {values.count}</h1>

      <button onClick={() => values.setloading
        (true)} class="text-3xl">Loading</button>
    </div>
  )
}

export default Practise
