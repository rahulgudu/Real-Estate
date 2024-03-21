import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import "./App.css";
import Companies from "./component/Companies/Companies";
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
    </div>
  );
}

export default App;
