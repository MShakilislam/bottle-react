
import { Suspense } from 'react'
import './App.css'
import Bottlse from './components/Bottlse/Bottlse'

const featchBottls = fetch('./battalse.json')
  .then(res => res.json())

function App() {

  return (
    <>
      <h1>Awesome water battles </h1>

      <Suspense fallback={<h2>Bottls data loading........</h2>}>
        <Bottlse featchBottls={featchBottls}></Bottlse>
      </Suspense>
      
    </>
  )
}

export default App
