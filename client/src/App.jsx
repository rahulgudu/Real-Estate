import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import "./App.css";
import Companies from "./component/Companies/Companies";
import Residencies from "./component/Residencies/Residencies";
import Value from "./component/Value/Value";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient">
          <Header />
          <Hero />
        </div>
      </div>
      <Companies />
      <Residencies />
      <Value />
    </div>
  );
}

export default App;
