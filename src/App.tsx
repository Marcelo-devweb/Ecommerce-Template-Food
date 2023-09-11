import Banner from "./components/Banner";
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
      <Banner />
    </main>
  );
};

export default App;