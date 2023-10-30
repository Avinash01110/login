import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import GlobalStyles from "./CreateGlobalStyles";


function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Login/>
    </div>
  );
}

export default App;
