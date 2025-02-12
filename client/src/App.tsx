import { Outlet } from "react-router-dom";
import { Provider } from "./services/Context.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Provider>
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
