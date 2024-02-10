import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header'
import Nuestra from './components/Nuestra';
import Jackpot from './components/Jackpot';
import Casino from './components/Casino';
import Offer from './components/Offer';
import Lase from './components/Lase'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Nuestra />
      <Jackpot />
      <Casino />
      <Offer />
      <Lase/>
      <Footer/>
    </div>
  );
}

export default App;
