import './App.css';
import Title from './components/Title';
import MainTitle from './components/MainTitle';
import Counter from './components/counters/Counter';
import Users from './components/Users';

function App() {
  console.log('App.jsx created');

  // paspaudus an h1 el, padidini jo dydi iki 2rem
  return (
    <div className="App container">
      <MainTitle />
      <Counter counterTitle="Push ups" />
      <Counter>Push ups</Counter>

      {/* <Title>Events and Hooks</Title> */}
      {/* <Users /> */}
    </div>
  );
}

export default App;
