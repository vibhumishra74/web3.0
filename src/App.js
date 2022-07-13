import {Navbar,Loader,Footer,Transactions,Welcome, Services} from './component'

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
    </div>
  );
}

export default App;
