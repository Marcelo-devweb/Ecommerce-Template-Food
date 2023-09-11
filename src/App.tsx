import Banner from "./components/Banner/Banner";
import Breakfast from "./components/Food Section/Breakfast";
import Category from "./components/Category/Category";
import FeatureSection from "./components/Feature/FeatureSection";
import Footer from "./components/Footer/Footer";
import Fruits from "./components/Food Section/Fruits";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import NewsLetter from "./components/News/NewsLetter";

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
      <FeatureSection />
      <Footer />
    </main>
  );
};

export default App;