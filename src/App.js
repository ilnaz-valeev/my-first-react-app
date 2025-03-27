import logo from './logo.svg';
import './App.css';
import Message from './Message/Message';
import CommentsList from "./comentlist/commentlist";
import TemperatureConverter from "./newmaterialui/TemperatureConverter";
import TodoList from "./newmaterialui/TodoList"




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemperatureConverter />
        <TodoList/>
        <CommentsList />
        <Message text="Привет, это текст через props" />
      </header>
    </div>
  );
}

export default App;

