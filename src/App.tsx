import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoContext from "./contexts/TodoContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <TodoContext>
      <Router>
        <Navbar></Navbar>
        <br />
        <div className="uk-container">
          <Routes>
            <Route path="/create" element={<AddTodo/>} />
            <Route path="/" element={
              <>
                <h4>Minha lista de tarefas</h4>
                <TodoList></TodoList>
              </>
            }>
            </Route>
          </Routes>
        </div>
      </Router>
    </TodoContext>
  )
}

export default App
