import { useState } from "react"
import { Todo } from "../types"

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={() => addTodo("New Task")}>Add Task</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos