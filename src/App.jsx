import './App.css'
import Todoitem from './components/Todoitem'

function App() {
  const todos = [
    {id: 0, label: 'hammare', done: false},
    {id: 1, label: 'hummer', done: true},
  ]

  const toggleTaskCompleted = (index) => {
    console.log('toggleTaskCompleted', index)
  }

  return (
    <div className="container">
      <h1>Vill du göra en sak?</h1>
        <ul className='todo-list'>
          {todos.map((todo, index) =>
          <Todoitem
            key={index}
            id={ todo.id}
            label={todo.label}
            done={todo.done}
            toggleTaskCompleted = {toggleTaskCompleted}
            />
          )}
        </ul>
    </div>
  )
}

export default App
