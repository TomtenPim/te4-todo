import './App.css'
import Todolist from './components/Todolist'

function App(){
  return(
    <div className="container">
      <h1>Vill du göra en sak?</h1>
      <Todolist />
    </div>
  )
}

export default App