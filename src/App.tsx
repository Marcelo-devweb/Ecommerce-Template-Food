import Banner from "./components/Banner";
import Breakfast from "./components/Breakfast";
import Category from "./components/Category";
import Fruits from "./components/Fruits";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsLetter from "./components/NewsLetter";

const App = () => {
  return(
    <main>
      <Navbar />
      <Hero />
      <Category />
      <Fruits />
      <Breakfast />
      <Banner />
      <News />
      <NewsLetter />
    </main>
  );
};

export default App;