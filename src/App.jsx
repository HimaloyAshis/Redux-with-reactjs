import './App.css'
import CounterContext from './CounterContext/CounterContext'
import CaseTwo from './page/CaseTwo/CaseTwo'
import Parent from './page/CaseTwo/Parent'


function App() {


  return (
    <>
      {/* <Parent></Parent> */}
      {/* <CaseTwo></CaseTwo> */}
      <CounterContext>
        <Parent></Parent>
      </CounterContext>
    </>
  )
}

export default App
