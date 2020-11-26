import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";
import { decrease, increase } from "./actions/nrActions";

function App() {
  const nr = useSelector((state: RootStore) => state.nr.nr);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <div>Nr : {nr}</div>
      <button onClick={() => dispatch(increase())} className="btn btn-primary">
        +
      </button>
      <button
        onClick={() => dispatch(decrease())}
        className="btn btn-secondary"
      >
        -
      </button>
    </div>
  );
}

export default App;
