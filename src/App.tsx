import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoContext from "./contexts/TodoContext";

function App() {
  return (
    <TodoContext>
      <div className="uk-container">
        <Navbar/>
        <TodoList/>
      </div>
    </TodoContext>
  )
}

export default App
