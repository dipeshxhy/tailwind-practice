import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF">
      <Nav/>
      <Hero/>
      <About/>
      <Work/>
    </div>
  );
};

export default App;

