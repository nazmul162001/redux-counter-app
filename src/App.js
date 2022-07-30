import './App.css';
import CounterView from './features/counter/CounterView';
import PostView from './features/posts/PostView';

function App() {
  return (
    <div className="App">
      <h2>Welcome to Redux counter app</h2>
      <CounterView />
      <PostView />
    </div>
  );
}

export default App;
