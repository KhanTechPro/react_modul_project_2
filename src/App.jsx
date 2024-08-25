import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";
import Quality from "./components/Quality";
import Special from "./components/Special";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularProducts />
      <Quality />
      <Special />
      <Footer />
    </>
  );
}

export default App;
