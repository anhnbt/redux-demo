import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterAction';

function App() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>&copy; 2025 CodeGym.</div>
    </>
  );
}

export default App;
