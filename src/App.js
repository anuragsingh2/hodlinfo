import "./App.css";
import AddToHome from "./components/AddToHome";
import Bottom from "./components/Bottom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="App">
      <div className="theme-dark">
        <Header />
        <HeroSection />
        <Content />

        <Footer />
        <AddToHome />
      </div>
    </div>
  );
}

export default App;
