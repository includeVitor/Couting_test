import React, { useCallback, useReducer } from "react";
import CountReducer from "../../reducers/Counter";
import { actions } from "../../reducers/Counter/actions";

const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(CountReducer, initialState);

  const handleAumentar = useCallback(
    () => dispatch({ type: actions.increment }),
    []
  );

  const handleDiminuir = useCallback(
    () => dispatch({ type: actions.decrement }),
    []
  );

  return (
    <>
      <h2>{state.count}</h2>
      <button data-test-id="btnAumentar" onClick={handleAumentar}>
        aumentar
      </button>
      <button onClick={handleDiminuir}>diminuir</button>
    </>
  );
};

export default Counter;
