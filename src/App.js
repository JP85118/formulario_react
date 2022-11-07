import logo from './logo.svg';
import './App.css';
import FormReact from './Components/FormReact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormReact />
      </header>
    </div>
  );
}

export default App;
