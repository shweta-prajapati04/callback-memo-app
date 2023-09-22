import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MemoCount } from './MemoCount'
import { Counter } from './Counter'

function App() {

  return (
    <>
      <MemoCount/>
      <Counter/>
    </>
  )
}

export default App
