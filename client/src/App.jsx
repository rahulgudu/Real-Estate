import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import "./App.css";
import Companies from "./component/Companies/Companies";
import Residencies from "./component/Residencies/Residencies";
import Value from "./component/Value/Value";
import Contact from "./component/Contact/Contact";
import Newsletter from "./component/Newsletter/Newsletter";
import Footer from "./component/Footer/Footer";
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
      <Contact />
      <Newsletter />
    </div>
  );
}

export default App;
