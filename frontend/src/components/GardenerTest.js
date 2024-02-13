'use client'

import { decrement, increment, selectValue } from '../store/reducers/gardenerReducer'
import { useSelector, useDispatch } from 'react-redux'
export default function GardenerTest() {
  const count = useSelector(selectValue)// useSelector para obtener el valor de nuestro estado cada vez que cambie
  const dispatch = useDispatch() // useDispatch para ejecutar nuestros actions
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h2> Gardener dispatch test {count}</h2>

      <br />

      <button onClick={() => dispatch(increment())}> Increment </button>
      <button onClick={() => dispatch(decrement())}> Decrement </button>
    </main>
  );
}