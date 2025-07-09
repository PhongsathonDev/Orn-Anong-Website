import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/Welcome-page';
import HomePage from './components/Home-page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
    </div>
  );
}

export default App;