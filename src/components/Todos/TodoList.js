import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length
        ? <h2>Todo List is empty</h2>
        : todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />)}
    </div>
  )
}

export default TodoList