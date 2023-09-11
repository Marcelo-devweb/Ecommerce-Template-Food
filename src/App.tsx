import Breakfast from "./components/Breakfast";
import Category from "./components/Category";
import Fruits from "./components/Fruits";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return(
    <main>
      <Navbar />
      <Hero />
      <Category />
      <Fruits />
      <Breakfast />
    </main>
  );
};

export default App;