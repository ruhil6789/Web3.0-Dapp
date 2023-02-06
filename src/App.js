
import './App.css';
import { Navbar, Welcome, Footer, Services, Transactions } from './Component';
// import ERC20 from './Component/ERC20/ERC20';
function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
      {/* <ERC20 /> */}

    </div>
  );
}

export default App;
