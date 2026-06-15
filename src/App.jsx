import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF">
      <Nav/>
      <Hero/>
      <About/>
    </div>
  );
};

export default App;

