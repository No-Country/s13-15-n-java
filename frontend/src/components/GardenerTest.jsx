'use client'

import { decrement, increment, selectValue } from '../store/reducers/gardenerReducer'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile } from '@/queries/jardinero'
import { useEffect, useState } from 'react'
export default function GardenerTest() {
  const count = useSelector(selectValue)// useSelector para obtener el valor de nuestro estado cada vez que cambie
  const dispatch = useDispatch() // useDispatch para ejecutar nuestros actions
  const [jardinero, setJardinero] = useState()
  useEffect(() => {
    getProfile(1).then((res) => {
      setJardinero(res.data)
    })
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h2> Gardener dispatch test {count}</h2>

      <br />
      <h1>{jardinero?.nombre}</h1>
      <button onClick={() => dispatch(increment())}> Increment </button>
      <button onClick={() => dispatch(decrement())}> Decrement </button>
    </main>
  );
}