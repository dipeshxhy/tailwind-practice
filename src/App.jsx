import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Work from "./components/Works";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Nav/>
      <Hero/>
      <About/>
      <Work/>
      <Footer/>
    </div>
  );
};

export default App;

