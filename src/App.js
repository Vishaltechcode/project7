import "./App.css";
import { useReducer } from "react";
const intialstate = { count: 10 };

function myreducer(state, action) {
  switch (action.type) {
    case "increasecount": {
      return {
        count: state.count + 1,
      };
    }
    case "increasecountby5": {
      return {
        count: state.count + 5,
      };
    }
    case "increasecountby10": {
      return {
        count: state.count + 10,
      };
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(myreducer, intialstate);
  return (
    <div className="App">
      <h1>task on use reducer </h1>
      <p>result, {state.count}</p>
      <button onClick={() => dispatch({ type: "increasecount" })}>+1</button>
      <button onClick={() => dispatch({ type: "increasecountby5" })}>+5</button>
      <button onClick={() => dispatch({ type: "increasecountby10" })}>
        +10
      </button>
    </div>
  );
}

export default App;
