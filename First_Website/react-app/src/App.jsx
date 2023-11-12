import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
function App() {
  // <Navbar />
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
      <Cards></Cards>
      <Footer></Footer>
    </>
  );
}

export default App;
