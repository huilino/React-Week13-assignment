import logo from './logo.svg';
import './App.css';
import LoginForm from './components/loginform';
import Navigationbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <LoginForm/>
    </div>
  );
}

export default App;
