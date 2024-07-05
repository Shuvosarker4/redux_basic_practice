import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex border border-purple-300 rounded-md p-10 bg-slate-50">
        <button
          onClick={() => dispatch(increment())}
          className="text-xl font-semibold bg-green-500 text-white
        px-3 py-2  rounded-lg text-center"
        >
          Increment
        </button>
        <h1 className="text-4xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="text-xl px-3 py-2 font-semibold bg-red-500  text-white
        p-3 rounded-lg text-center"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
