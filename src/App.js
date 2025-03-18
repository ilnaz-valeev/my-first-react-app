import logo from './logo.svg';
import './App.css';
import Message from './Message/Message';
import CommentsList from "./comentlist/commentlist";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <CommentsList/>
        <Message text="Привет, это текст через props" />
      </header>
    </div>
  );
}

export default App;

