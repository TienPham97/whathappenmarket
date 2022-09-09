import './App.css';
import Banner from './components/Banner/Banner';
import BestProduct from './components/BestProduct/BestProduct';
import BrandStory from './components/BrandStory/BrandStory';
import Footer from './components/Footer/Footer';
import HappenIssue from './components/HappenIssue/HappenIssue';
import HappenVideo from './components/HappenVideo/HappenVideo';
import Introduction from './components/Introduction/Introduction';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Products/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Introduction />
      <BestProduct />
      <Product />
      <BrandStory />
      <HappenIssue />
      <HappenVideo />
      <Footer />
    </div>
  );
}

export default App;
