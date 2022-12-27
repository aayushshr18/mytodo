import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList'

function App() {
  return (
    <>
    <Navbar/>
    <div className="todo-list-container">
      <TodoList/>
      
    </div>
    </>
  );
}

export default App;
